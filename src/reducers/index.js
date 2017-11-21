import { combineReducers } from 'redux'
import UnitsReducer from './reducer_units'

const rootReducer = combineReducers({
  units: UnitsReducer
})

export default rootReducer
