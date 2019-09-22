#Login Template

This project is a basic login template. It is served by a Ruby on Rails API [located here](https://github.com/Zannisdf/login-api).

To use it simply fork or clone this project and install its dependencies by running:

```
yarn
// or
npm install
```

To be able to connect to the api, create a `.env` file in the root folder of the project with the API entry point. In the same file you need to store the localstorage key for your token, as follows:

```
// .env
REACT_APP_USER_TOKEN=__user_token__
REACT_APP_API_URL=https://beetrack-login-api.herokuapp.com
```

Additionally you can run tests with

```
yarn test
```

You can see the app live [here](https://bt-login-template.herokuapp.com/). In order to log in you can use the following credentials:

```
email: test@login.com
password: 123456
```


