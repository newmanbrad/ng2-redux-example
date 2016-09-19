# Getting Started With NG2 & Redux

Basic NG2 CRUD functionality is provided as example via the `Clients` component. This example also includes the baked in 
NG2 validation as well as `ng2-redux` with dev tools enabled. 

This project will be ongoing and continue to change as new RC candidates become available.

Includes:
* Webpack
* Page routing with NG2 Router
* ng2-redux integration
* Compatibility with the existing Redux devtools Chrome extension
* The ability to access slices of store state as Observables
* Integration with Less / Bootstrap / Bootstrap Material Design 
* Angular 2 Final

## Installation

```sh
npm install npm run start
```

Install Redux Devtools from Chrome. Can be found here: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

1. After installing and running you can find the application here: http://localhost:8080/clients
2. Open the Chrome console and select the Redux tab to use time travel debugging.

## CSS / Less

Currently, css loader is being used to bring plain css for Bootstrap and Bootstrap Material Design to enhance load time. 
Webpack dev server can take minutes to load and reload dynamic Less or Sass.