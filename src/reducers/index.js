import { combineReducers } from 'redux'
import photoListReducer from './photoListReducer'
import photoViewReducer from './photoViewReducer'

export default combineReducers({
  photoList: photoListReducer,
  photo: photoViewReducer,
})
