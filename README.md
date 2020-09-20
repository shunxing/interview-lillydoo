# Lillydoo - Task

This project is a task that Lillydoo is asking for the technical interview. 

# Description
The user is landing on the trial packs page of Lillydoo. 
The user can select one trial pack. The options are differing from the size the user can choose and what the package is including.

From size 1 to 3, the user will receive a pack containing:
- 10 Lilliydoo diapers
- 15 wet wipes with 99% of water

From size 4 to 5, the user will receive a pack containing:
- 10 Lilliydoo diapers
- 15 sensive wet wipes 

# Technical details
## Frontend
- Framework : VueJS 3.0
- Application CLI : vue-cli
- State management : vuex4 (beta) but only one working with VueJS 3.0
- Styling : Sass and BEM convention
- Formating : prettier2
- Unit testing: jest@24.9
- e2e testing : cypress@3.8







# Commands
## Required : Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Trigger http-server for data API
```
yarn server
```

### Trigger unit tests
```
yarn test:unit
```

# NOTE : 
The page is not pixel-perfect as the main goal of this task, in my opinion, is based on the architecture of the application that could be related to a React one. Also what I wanted to achieve and show is the way VueJS is articulated with the state management.

Also the application has been created thanks to vue-cli because it would take more time to configure all the tools I am using, especially webpack. 