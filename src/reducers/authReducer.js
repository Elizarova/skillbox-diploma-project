const INITIAL_STATE = {
  token: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTH':
      return { ...state, token: action.payload.access_token }
    default:
      return state
  }
}
