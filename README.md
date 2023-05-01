# langchain-ts-starter

Boilerplate to get started quickly with the [Langchain Typescript SDK](https://github.com/hwchase17/langchainjs).

This uses the same tsconfig and build setup as the [examples repo](https://github.com/hwchase17/langchainjs/tree/main/examples), to ensure it's in sync with the official docs.

# What's included

- Typescript
- .env file configuration
- ESLint and Prettier for formatting
- Turborepo to quickly run build scripts
- `tsup` to bundle Typescript code
- `tsx` to quickly run compiled code

# How to use

- Clone this repository
- `npm install`
- Write your code in `src`
- `npx turbo run build lint format` to run build scripts quickly in parallel
- `npm start` to run your program

## My notes

- For some reason `npm install` for the original repo and `npm install --save chromadb` only work with node 16. But you need to run `npm start` with node 18 otherwise axios dependency fails because `Headers` is a new feature.
- To use chroma for embedings and vector store you need to install the server. It seems that the python version allows in memory db but with this client sdk you need the server running. Chroma can be installed via docker using [this repo](git@github.com:chroma-core/chroma.git). On my machine I had to change the ports config in `docker-compose.yml`
