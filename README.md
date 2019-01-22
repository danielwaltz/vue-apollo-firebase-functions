# Vue Apollo Firebase Functions

Example project using a Vue frontend to send data an Apollo GraphQL server based in a cloud function on Firebase. Check out the [demo](https://vue-apollo-firebase-functions.firebaseapp.com/)!

## Local Development

Clone the repo and download dependencies. Dependencies will need to be downloaded in two locations; the repo root and the `functions` directory. `nvm` is used in the `functions` directory because Firebase cloud functions run on node `v8.14.0` and don't give you an option to use a later version. `npm` must also be used in the `functions` directory for most tasks.

```
yarn
cd functions
npm i
```

After dependencies are downloaded, start the frontend server and Firebase functions emulator.

```
yarn serve
cd functions
npm run server
```

You can then navigate to `http://localhost:8080` and changes made will be reflected on save. The emulated cloud function is located at `http://localhost:5000/vue-apollo-firebase-functions/us-central1/api/graphql` and includes a GraphQL playground. Make sure you change the url inside the playground for it to work properly!

## Build & Deploy

The first step is to create a new project in [Firebase](https://firebase.google.com/). It is free to host a simple cloud function with a couple gotchas; strict rate limits and no access to the outside internet from inside the function. It's limiting but perfect for getting started.

After your project is created run `yarn firebase login` from the repo root. After you have logged in to the Firebase cli you then need to change instances of `vue-apollo-firebase-functions` throughout the project to the id of your new project. I recommend running a find and replace.

After the urls are updated simply run `yarn deploy` and wait for the deployment to Firebase to complete! By default it will deploy both the frontend and function in one go.
