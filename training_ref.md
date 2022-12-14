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

# useEffect(didUpdate) : runs on every render cycle

# useEffect(didUpdate, []) : will run only once at the time of initial rendering

# useEffect(didUpdate, [Dependencies]) : will run at the initial rendering, also run when the mentioned dependencies will change

# useEffect(didUpdate => cleanUp, [Deps]) : clean-up will fire just before the didUpdate runs, but after the initial render

> npm install json-server -g
> json-server --watch db.json --port=3030

> axios > npm i axios
> fetch > browser builtin object - XHR

> useContext(Context) : returns Consumer of the context
> useReducer(ReducerFn) : to manage the complex state in Component
> useCallback(cb) : returns memoized CB function
> useMemo(cb => value) : returns memoized value

useState() : for component level; simple state functionality
useReducer() : for component level; complex state functionality
useContext(Context) : for component branch level; No complex state management in context; Max 2-3 Context Provider

redux : App-wide state management; any complex state here

# Training Material Web-links

- https://www.typescriptlang.org/docs/handbook/intro.html
- https://reactjs.org/tutorial/tutorial.html
- https://reactrouter.com/en/main/start/tutorial
- https://redux-toolkit.js.org/tutorials/overview

# synergy2411@outlook.com
