import { combineReducers } from 'redux'
import presidents  from './presidentsReducer'
import hasErrored from './hasErroredReducer';
import isLoading from './isLoadingReducer'


const rootReducer = combineReducers({
  presidents,
  hasErrored,
  isLoading
})

export default rootReducer