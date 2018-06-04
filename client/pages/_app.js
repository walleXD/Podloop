import React from "react"
import App, { Container } from "next/app"
import withRedux from "../lib/withRedux"

export default withRedux(
  class AppRoot extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
    }

    render() {
      const { Component, pageProps } = this.props
      return (
        <Container>
          <Component {...pageProps} />
        </Container>
      )
    }
  }
)
