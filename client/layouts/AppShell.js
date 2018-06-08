import React from "react"
import Link from "next/link"
import { node } from "prop-types"
import { compose } from "redux"

import withMaterial from "../lib/withMaterial"
import withRedux from "../lib/withRedux"

const AppShellLayout = ({ children }) => (
  <div id="app-shell">
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/test">
        <a>Test</a>
      </Link>
    </nav>
    <main>{children}</main>
  </div>
)

AppShellLayout.propTypes = {
  children: node
}

export default compose(
  withMaterial,
  withRedux
)(AppShellLayout)
