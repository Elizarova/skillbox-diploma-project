import { combineReducers } from 'redux'
import photoListReducer from './photoListReducer'

export default combineReducers({
  photoList: photoListReducer,
})
