# Nuxt3 / tRPC / Drizzle ORM / CloudFlare D1 

Demo project.

## Setup local dev
Fork demo repo: https://github.com/juretopolak/trpc-nuxt
```
git clone https://github.com/[username]/trpc-nuxt
cd trpc-nuxt
yarn install
```

## Setup CloudFlare Page
- Login in CloudFlare > Workers & Pages
- Create aplication > Pages
- Connect to Git > Select new `[trpc-nuxt]` repo
- Begin setup and deploy with settings:
```
Build command: npx nuxi generate
Build output directory: /dist
Root directory: /
Build comments on pull requests: Enabled
```
- Page > Settings > Environment variables > Add variables
```
YARN_ENABLE_IMMUTABLE_INSTALLS = false
```
## Setup CloudFlare D1 (Database)
- Workers & Pages > D1
- Create database (Dashboard)
- Copy Database name and ID to `wrangler.toml`

## Bind Database to Page
- Workers & Pages > [trpc-nuxt] > Settings
- Functions > D1 database bindings
- Edit bindings > Add variable
```
DB = trpc-nuxt
```
## Create local development server

```bash
wrangler login
wrangler d1 migrations apply DB --local
wrangler pages dev --local --d1=DB -- yarn dev
```

## Push to deploy
Push and check new deployment in CloudFlare.
```
git push
```

