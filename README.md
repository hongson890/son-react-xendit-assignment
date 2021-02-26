# React Xendit Assignment

In this project, I'm gonna build a React Application example with some features, including React Router, Redux, MaterialUI, etc. I will show you:

- Project Structure for React Redux Material-UI Application
- Provide Authentication with Login & SignUp function by using users.json file
- Provide Protected Route and Public Route
- Different Wrap Layouts setup
- Snackbar Popup with Redux State Management
- Navigation Bar with 3 different menus and 3 routes
- Responsive Design
- Unit Test, with coverage setup
- ESLint
- react-i18next
- Reusable Components
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
  node_modules/
  public/
  package.json
  .eslintrc
  .gitignore
  .prettierrc
  README.md
  users.json
  src/
    components/
    helpers/
    layouts/
    redux/
    services/
    tests/
    theme/
    views/
    App.js
    index.js
    i18n.js
    serviceWorker.js
    setupTests.js
```

## Installing & Starting

Please install and start the project by following command:

- Install node_modules by using yarn
```
yarn
```

- Start application
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

## Demo
Using existed account to login into system
```
email: hongson890@gmail.com,
password: 123456
```

## Screenshots
1._Login Page_

![ScreenShot](https://raw.githubusercontent.com/hongson890/son-react-xendit-assignment/main/screenshots/login.png)

2._Register Page_

![ScreenShot](https://raw.githubusercontent.com/hongson890/son-react-xendit-assignment/main/screenshots/register.png)

3._Universities Searching Page_

![ScreenShot](https://raw.githubusercontent.com/hongson890/son-react-xendit-assignment/main/screenshots/universities.png)

4._User Profile Page (Login Required)_

![ScreenShot](https://raw.githubusercontent.com/hongson890/son-react-xendit-assignment/main/screenshots/user-profile.png)



## Authors

* **Son Pham** - *Initial work* - [Son Pham](https://github.com/hongson890)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
