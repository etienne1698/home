# Architecture

This project follows **Hexagonal Architecture (Ports & Adapters)** combined with **Domain-Driven Design (DDD)** principles.

## app

This folder contains the application bootstrap and HTTP server configuration.

- `app.ts` → Configures the HTTP server (using [Hono](https://hono.dev)) and middleware.
- `index.ts` → Main application entry point (starts the app).
- `composition-root.ts` → Central dependency injection / wiring of domain, infrastructure, and drivers.
- `routes.ts` → Aggregates and registers HTTP routes for all domains.

## shared

This folder contains **cross-cutting code** that is not tied to any specific domain.  
It provides reusable building blocks for configuration, infrastructure, utilities, and global types.

## modules

Each module represents a **domain (DDD bounded context)**.  
A module is split into **Domain**, **Infrastructure**, and **Drivers** layers. (this layers are not separated into folders)

### Domain

- `*.service.ts` → Business services (domain use cases, orchestration of entities).
- `*.entity.ts` → Entities and value objects (core domain models).
- `*.repository.ts` → Repository interface (port): defines how the domain accesses persistence.

### Infrastructure

- `*.repository-sql.ts` → SQL repository implementation (adapter for `*.repository.ts` using [Drizzle ORM](https://orm.drizzle.team/)).
- `*.sql.ts` → Database schema & mappings (using [Drizzle ORM](https://orm.drizzle.team/)).

### Drivers

- `*.routes.ts` → HTTP controllers (maps HTTP requests to domain use cases).
- `*.dto.ts` → Data Transfer Objects (validation, serialization, and request/response shapes).
