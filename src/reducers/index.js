const nutsReduce = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_NUTS':
      return [...action.nuts]
    default:
      return state
  }
}

export default nutsReduce
