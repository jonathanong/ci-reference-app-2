
import {
  ADD
} from './actions'

export default (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return state.concat(payload)
    default:
      return state
  }
}
