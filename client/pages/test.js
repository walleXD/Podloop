import React from "react"
import { Typography } from "@material-ui/core"

import LocalTestContainer from "../containers/LocalTest"
import withMaterial from "../lib/withMaterial"

const TestPage = () => (
  <div>
    <Typography variant="display1">This is local Test</Typography>
    <LocalTestContainer />
  </div>
)

export default withMaterial(TestPage)
