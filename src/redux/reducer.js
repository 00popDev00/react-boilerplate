import { combineReducers } from 'redux'
import Rcounter from './reducers/inc'
import Rtimer from './reducers/timer'


  export default combineReducers({counter:Rcounter ,timer:Rtimer});

