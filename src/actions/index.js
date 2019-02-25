import { toJson } from 'unsplash-js'
import { unsplash } from '../api/unsplash'

export const fetchPhotoList = (currentPage, photoPerPage) => async dispatch => {
  const response = await unsplash.photos
    .listPhotos(currentPage, photoPerPage, 'latest')
    .then(toJson)

  dispatch({
    type: 'FETCH_PHOTOS',
    payload: response,
  })
}

export const fetchMorePhotos = (
  currentPage,
  photoPerPage
) => async dispatch => {
  const response = await unsplash.photos
    .listPhotos(currentPage + 1, photoPerPage, 'latest')
    .then(toJson)

  dispatch({
    type: 'FETCH_MORE_PHOTOS',
    payload: response,
  })
}
