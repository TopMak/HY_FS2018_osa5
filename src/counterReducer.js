const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      // console.log("hyvä");
      const newGoodState = {...state, good: state.good + 1}
      return newGoodState
    case 'OK':
      // console.log("ok");
      const newOkState = {...state, ok: state.ok + 1}
      return newOkState
    case 'BAD':
      // console.log("huono");
      const newBadState = {...state, bad: state.bad + 1}
      return newBadState
    case 'ZERO':
      return state = initialState
    default:
    console.log("default case")
    return state
  }
}

export default counterReducer
