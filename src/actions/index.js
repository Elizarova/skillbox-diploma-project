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

export const getPhoto = id => async dispatch => {
  const data = await unsplash.photos.getPhoto(id).then(toJson)
  const payload = { likedByUser: data.liked_by_user, likes: data.likes }

  dispatch({
    type: 'GET_PHOTO',
    payload: payload,
  })
}

export const likePhoto = id => async dispatch => {
  const data = await unsplash.photos.likePhoto(id).then(toJson)
  const payload = {
    likedByUser: data.photo.liked_by_user,
    likes: data.photo.likes,
  }

  dispatch({
    type: 'LIKE_PHOTO',
    payload: payload,
  })
}

export const unlikePhoto = id => async dispatch => {
  const data = await unsplash.photos.unlikePhoto(id).then(toJson)
  const payload = {
    likedByUser: data.photo.liked_by_user,
    likes: data.photo.likes,
  }

  dispatch({
    type: 'UNLIKE_PHOTO',
    payload: payload,
  })
}
