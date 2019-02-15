import { toJson } from 'unsplash-js'
import { unsplash } from '../api/unsplash'

const PHOTOS_PER_PAGE = 2

export const fetchPhotoList = currentPage => async dispatch => {
  const code = window.location.search.split('code=')[1]

  // const code = '1508cec4829dcb23f146192346c94b27134646cc4265f58f6e26c39bceb0cf21'

  const authOk = await unsplash.auth
    .userAuthentication(code)
    .then(toJson)
    .then(json => {
      if (json.error) {
        console.log(json.error_description)
        return false
      }
      unsplash.auth.setBearerToken(json.access_token)
      return true
    })

  if (authOk) {
    const response = await unsplash.photos
      .listPhotos(currentPage, PHOTOS_PER_PAGE, 'latest')
      .then(toJson)

    console.log('response', response)

    dispatch({
      type: 'FETCH_PHOTOS',
      payload: response,
    })
  }
}

export const fetchMorePhotos = currentPage => async dispatch => {
  const response = await unsplash.photos
    .listPhotos(currentPage + 1, PHOTOS_PER_PAGE, 'latest')
    .then(toJson)

  console.log('response', response)
  dispatch({
    type: 'FETCH_MORE_PHOTOS',
    payload: response,
  })
}

export const loadPhotos = () => {
  return {
    type: 'LOAD_PHOTOS',
  }
}
