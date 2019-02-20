const INITIAL_STATE = {
  likedByUser: null,
  likes: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PHOTO':
      return { ...state, ...action.payload }

    case 'LIKE_PHOTO':
      return { ...state, ...action.payload }

    case 'UNLIKE_PHOTO':
      return { ...state, ...action.payload }

    default:
      return state
  }
}
