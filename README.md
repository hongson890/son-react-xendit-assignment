# React Xendit Assignment

In this project, I'm gonna build a React Application example with some features, including React Router, Redux, Axios, MaterialUI, etc. I will show you:

- Project Structure for React Redux Material Application
- Different Wrap Layouts setup
- Navigation Bar with 3 different menus and 3 routes
- Responsive Design
- Unit Test, with coverage setup
- ESLint
- i18n
- json-server to store simple data in json file

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you have installed Node.js in your machine, it recommends the Node version 12 and older.

```
# to check node version in your local machine
node -v
```

## Folder Structure

After creation, your project should look like this:

```
son-react-xendit-assignment/
  README.md
  node_modules/
  package.json
  .eslintrc
  .gitignore
  .prettierrc
  users.json
  public/
    index.html
    favicon.ico
  src/
    components/
    helpers/
    pages/
    redux/
    services/
    tests/
    App.js
    index.js
    i18n.js
    serviceWorker.js
    setupTests.js
```

## Installing

Please install and start the project by following command:

- Step 1: Install node_modules
```
yarn
```

- Step2: Start json-server
```
yarn start-server
```

- Step3: Start client
```
yarn start
```

## Running the tests
```
yarn test
```

## Deployment
```
yarn build
```

Builds the app for production to the `build` folder.\


## Authors

* **Son Pham** - *Initial work* - [Son Pham](https://github.com/hongson890)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
