# Architecture

This project follows **Hexagonal Architecture (Ports & Adapters)** combined with **Domain-Driven Design (DDD)** principles.

## app

This folder contains the application bootstrap and HTTP server configuration.

- `composition-root.ts` → Central dependency injection / wiring of domain, infrastructure, and drivers.
- `index.ts` → Main application entry point.
- `http`
    - `config` → http app configurations
    - `app.ts` → Configures the HTTP server (using [Hono](https://hono.dev)) and middleware.
    - `routes.ts` → Aggregates and registers HTTP routes for all domains.
    - `index.ts` → start http app.

## shared

This folder contains **cross-cutting code** that is not tied to any specific domain.  
It provides reusable building blocks for configuration, infrastructure, utilities, and global types.

## modules

Each module represents a **domain (DDD bounded context)**.  

Inside a module, the code is organized following the **Hexagonal Architecture (Ports & Adapters)**:  
- The **business logic (domain)** is at the center (pure, framework-agnostic).  
- The **infrastructure** provides technical implementations of the domain’s ports.  
- The **drivers** expose the domain to the outside world (HTTP, CLI, etc.).  

These layers are separated by **file naming conventions**, not by folders, to keep the module flat and easy to navigate.

#### Domain (business logic)
- `*.service.ts` → Business services (domain use cases, orchestration of entities).
- `*.entity.ts` → Entities and value objects (core domain models).
- `*.repository.ts` → Repository interface (port): defines how the domain accesses persistence.

#### Infrastructure
- `*.repository-sql.ts` → SQL repository implementation (adapter for `*.repository.ts` using [Drizzle ORM](https://orm.drizzle.team/)).
- `*.sql.ts` → Database schema & mappings (using [Drizzle ORM](https://orm.drizzle.team/)).

#### Drivers
- `*.routes.ts` → HTTP controllers (maps HTTP requests to domain use cases).
- `*.dto.ts` → Data Transfer Objects (validation, serialization, and request/response shapes).


## Nota bene

In strict Hexagonal Architecture, DTOs (Data Transfer Objects) are usually defined at the domain boundary (as input/output ports) to ensure that the domain remains independent from specific drivers (e.g., HTTP).  

In this project, **DTOs are defined only in the `drivers` layer (Hono routes)**.  
This is intentional because:  
- It allows automatic **OpenAPI schema generation** using the Hono plugin `hono-openapi`.  
- It avoids duplication of validation logic between domain and drivers.  

⚖️ This is a trade-off: the domain layer indirectly depends on the driver DTOs (less strict hexagonal separation), but it keeps the codebase more pragmatic.