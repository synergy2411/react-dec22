# What is TypeScript?

- Microsoft sponsured
- JavaScript with the syntax of types
- ES6+ / ES2015 Features (Arrow function, spread, Rest, destructuring, Promises etc)
- OOP Concepts
- Type System/Definition
- Better tooling
- Easier to read
- Type Safety
- TSC - typescript

- npm init -y
- npm install typescript
- create script "compile" : "tsc"
- npx tsc --init
- "outDir" : "./dist"
- npm run compile

# Types in TypeScript

- number
- string
- boolean
- date
- function
- array
- any
- enum
- tuple
- void
- unknown
- never
- type keyword

# Generics

# Atomic Design

- Atom : smallest unit eg. one button, one input field etc
- Molecules : combo of Atoms e.g searchbar -> one input field + one button
- Organism : combo of molecules eg. Navigation Bar, form etc
- Template : combo of organism eg. Image gallery
- Page : Complete web page

Actual DOM : document.querySelector()/ getElementById("anchor")
html
head
title
script
meta
body
div
section
p
img
ul
li  
 a
text

Virtual DOM : Pure JavaScript; We can't access it; Diffing Algo

# React Command Line Tool -> CRA (Create-React-App)

> npx create-react-app <project-name> [--template typescript]

> npm vs npx
> NPM - package manager - install / uninstall dependencies
> NPX : executable

> npm install create-react-app -g
> create-react-app <project-name>

> npx create-react-app <project-name>

> cd frontend
> npm start > running the webpack-dev-server -> loading the HTML (index.html) file from public folder

/frontend> npm install bootstrap

- index.tsx > import "bootstrap/dist/css/bootstrap.min.css"

npm start --port=3001
