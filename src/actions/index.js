import { toJson } from 'unsplash-js'
import { unsplash } from '../api/unsplash'

const code = window.location.search.split('code=')[1]

// const code = '03ed3efc1f7ef5febe66b5fe427f211c71c550a1355a5d73fb450d27d5ddfed2'

export const fetchPhotoList = (currentPage, photoPerPage) => async dispatch => {
  await unsplash.auth
    .userAuthentication(code)
    .then(toJson)
    .then(json => {
      if (json.error) {
        console.log(json.error.toUpperCase())
      }
      unsplash.auth.setBearerToken(json.access_token)
    })

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
