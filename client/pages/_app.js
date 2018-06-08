import React from "react"
import App, { Container } from "next/app"

import AppShell from "../layouts/AppShell"

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
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </Container>
    )
  }
}

export default AppRoot
