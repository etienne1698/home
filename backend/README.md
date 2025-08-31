# Home backend


## Install Dependancies

```bash
npm i --force
```

- We have to do `--force` because of `hono-openapi` peerDependancies error (zod@3 and not zod@4), this work for sure 
- I will change this when `hono-openapi` peerDependancies will be fixed