import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import loggerMiddleware from "redux-logger"
import { getFirebase, reactReduxFirebase } from "react-redux-firebase"
import { reduxFirestore } from "redux-firestore"

import allReducers from "../reducers"
import { getFirebaseApp } from "./utils"

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

export default (preloadedState = {}, req) => {
  const isDev = process.env.NODE_ENV !== "production"
  const reducers = combineReducers(allReducers)
  const firebase = getFirebaseApp(config)
  firebase.firestore()
  // react-redux-firebase config
  const reactReduxFirebasefConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
    enableLogging: false,
    enableRedirectHandling: false,
    updateProfileOnLogin: true,
    setProfilePopulateResults: true
  }

  const prodMiddlewares = [thunkMiddleware.withExtraArgument(getFirebase)]
  const devMiddlewares = [loggerMiddleware]
  const middlewares = [...prodMiddlewares, ...(isDev && devMiddlewares)]

  const composedArgs = [
    reactReduxFirebase(firebase, reactReduxFirebasefConfig),
    reduxFirestore(firebase),
    applyMiddleware(...middlewares)
  ]

  const initStoreArgs = [reducers, preloadedState]

  if (!process.browser) {
    req = req || {}
    req._store = createStore(...initStoreArgs, compose(...composedArgs))
    return req._store
  }

  if (!window.store) {
    window.store = createStore(
      ...initStoreArgs,
      composeWithDevTools(...composedArgs)
    )
  }
  return window.store
}
