import React from "react"
import Link from "next/link"

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

export default AppShellLayout
