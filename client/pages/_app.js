import React from "react"
import { Provider } from "react-redux"
import App, { Container } from "next/app"
import withRedux from "next-redux-wrapper"
import initStore from "../lib/initStore"

export default withRedux(initStore)(
  class AppRoot extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
    }

    render() {
      const { Component, pageProps, store } = this.props
      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      )
    }
  }
)
