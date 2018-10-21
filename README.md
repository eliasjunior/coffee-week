

Below you will find some information on how to perform common tasks.<br>


## Table of Contents
- [Initial setup](#inicial-setup)

  - [npm install](#npm-install)
  - [npm start](#npm-start)
  - [production mode](#production-mode)
- [Available Scripts](#available-scripts)

  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [Folder Structure](#folder-structure)
- [Supported Browsers](#supported-browsers)

## Initial setup

### `npm install`

Open the terminal and run npm install<br>
This command will install all the dependencies <br>
After that It should be good to run the app.<br>

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `production mode`

  TODO

## Available Scripts

In the project directory, you can run:


The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

## Folder Structure

After creation, your project should look like this:

```
coffee-week/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js -> main file
    App.test.js
    index.css
    index.js
    logo.svg
    common -> global utilities
    footer
    header
    main-content -> user list and dashboard
    service -> business logic
```

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Supported Browsers

By default, the generated project supports all modern browsers.<br>
Support for Internet Explorer 9, 10, and 11 requires [polyfills](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md).


## Final Notes
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

