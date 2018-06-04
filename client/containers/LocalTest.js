import React from "react"
import { connect } from "react-redux"
import { func, number } from "prop-types"

import Test from "../components/Test"
import { localAdd, localSubstract } from "../actions/test"

const mapStateToProps = ({ test }) => ({
  score: test.score
})

const mapDispatchToProps = { localAdd, localSubstract }

class LocalTestContainer extends React.PureComponent {
  static propTypes = {
    localAdd: func,
    localSubstract: func,
    score: number
  }

  render() {
    return (
      <div>
        <Test
          add={this.props.localAdd}
          substract={this.props.localSubstract}
          score={this.props.score}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocalTestContainer)
