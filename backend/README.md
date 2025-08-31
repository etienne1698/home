# Architecture (Hexagonal + DDD)


## Rules

- `shared` is for common abstractions, should not contains business logic
- `domain` components should never depend on `infrastructure` or `drivers` 
- `infrastructure` depend on `domain`, implement domain ports (ex: repository...) 
- `drivers` (user facing components) (ex: rest controller, graphql resolver...), depend on `domain`
- On cross module dependancies: 
    - recreate needed interfaces on `domain` of dependant modules 
    - plug with the depending module implementations or create implementation on dependant modules and all needed to respond on depending module (much more "micro services ready")  

## Folder structure

- `src`
    - `modules/[module]` <-- one module per domain
        - `domain` <-- business logic / ports
            - `[domain].service.ts` <-- use cases
            - `[domain].entity.ts` <-- business model
            - `[domain].repository.ts` <-- port (interface) that service depend on
        - `drivers` <-- user facing (rest controller, graphql handler...)
            - `[domain].dto.ts` <-- API validators
            - `[domain].routes.ts` <-- API routes
        - `infrastructure` <-- adapters for domain ports
            - `[domain].repository-sql.ts` <-- SQL implementation of `[domain].repository.ts` 
            - `[domain].sql.ts` <-- SQL schema of domain table
    - `app` <-- bootstrap all components and start app
        - `app.ts` <-- hono app + global configs (cors...)
        - `composition-root`  <-- bootstrap all components
        - `routes`  <-- attach domains routes to app
    - `shared` <-- shared components between domains
        - `domain` <-- business logic / generic ports
        - `drivers` <-- user facing generic middlewares, controller...
        - `infrastructure` <-- generic adapters for domain ports
- `database` <-- contains migrations 

