import { localAdd, localSubstract } from "../types/test"

const initialState = {
  score: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case localAdd:
    case localSubstract:
      console.log(state, type, payload)
      return { ...state, score: state.score + payload }
    default:
      return state
  }
}
