import React from "react"
import App, { Container } from "next/app"
import { compose } from "redux"

import withRedux from "../lib/withRedux"
import withMaterial from "../lib/withMaterial"

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

export default compose(
  withRedux,
  withMaterial
)(AppRoot)
