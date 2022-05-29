

# API Restful Boilerplate
![CodeBadge](https://img.shields.io/badge/TypeScript-4.7.2-black?logo=typescript)
![CodeBadge](https://img.shields.io/badge/Node-14.9.1-black?logo=node.js)
![BuildBadge](https://img.shields.io/badge/Build-passing-green)


# Getting Started

API Documentation: https://documenter.getpostman.com/view/12296188/Uz5Aterc

## Start Docker Environment

`.bin/start`

### Build the project:

`npm run build`

### Start the builded project:

`npm run start`

### Start the development environment:

`npm run dev`

### Run the project linter:

`npm run lint`

### Start the project tests:

`npm run test`

## Request Flow Architecture

::: mermaid
stateDiagram-v2

Infrastructure
Application
Domain

    State1: HTTP Request
    State2: Controller
    State3: UseCase
    State4: Service/Repository
    State5: Database

state Infrastructure {
    State1 --> State2
    State2 --> Application
    State5
}


state Application {
    State3 --> Domain
}


state Domain {
    State4
}

State4 --> State5

:::

::: mermaid
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
:::