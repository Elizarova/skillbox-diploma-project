import { combineReducers } from 'redux'
import photoListReducer from './photoListReducer'
import authReducer from './authReducer'

export default combineReducers({
  photoList: photoListReducer,
  auth: authReducer,
})
