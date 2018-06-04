import React from "react"

import { Typography, Button } from "@material-ui/core"
import { func, number } from "prop-types"

const Test = ({ add, substract, score }) => (
  <div>
    <Typography variant="body1">{score}</Typography>
    <Button onClick={() => add(1)} variant="contained" color="primary">
      Add
    </Button>
    <Button onClick={() => substract(1)} variant="contained" color="secondary">
      Substract
    </Button>
  </div>
)

Test.propTypes = {
  add: func,
  substract: func,
  score: number
}

export default Test
