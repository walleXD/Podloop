import React, { Component } from "react"
import { combineReducers } from "redux"
import { Provider } from "react-redux"
import { object } from "prop-types"

import initStore from "./initStore"
import allReducers from "../reducers"

export default WrappedComponent => {
  const reducer = combineReducers(allReducers)
  return class EnhancedComponent extends Component {
    static displayName = `withRedux(${WrappedComponent.displayName ||
      WrappedComponent.name}`
    static async getInitialProps(context) {
      const { req } = context
      const isServer = !!req && typeof window === "undefined"
      const store = initStore(undefined, req)

      // client set cookies
      let cookies = (req && req.headers && req.headers.cookie) || {}
      if (typeof cookies === "string") {
        const cookie = require("cookie")
        cookies = cookie.parse(cookies)
      }

      // pass init props to getInitProps wrapped component for ssr ops
      let wrappedInitialProps = {}
      if (WrappedComponent.getInitialProps) {
        context = {
          ...context,
          dispatch: store.dispatch,
          getState: store.getState,
          initialState: store.initialState,
          initStoreReducer: reducer,
          isServer: store.isServer
        }
        wrappedInitialProps = await WrappedComponent.getInitialProps(context)
      }

      // Check for localStorge store cache and pass to cache populate
      const localStorageStore =
        process.browser && localStorage && localStorage.store
          ? JSON.parse(localStorage.store)
          : {}

      // →
      return {
        ...wrappedInitialProps,
        cookies,
        initialState: store.getState(),
        isServer,
        localStorageStore
      }
    }

    static propTypes = {
      initialState: object
    }

    constructor(props) {
      super(props)
      this.store = initStore(props.initialState, null)
    }

    render() {
      return (
        <Provider store={this.store}>
          <WrappedComponent {...this.props} />
        </Provider>
      )
    }
  }
}
