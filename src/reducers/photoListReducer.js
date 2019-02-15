const INITIAL_STATE = {
  currentPage: 1,
  photos: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_PHOTOS':
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
      }
    case 'FETCH_MORE_PHOTOS':
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        currentPage: state.currentPage + 1,
      }

    default:
      return state
  }
}
