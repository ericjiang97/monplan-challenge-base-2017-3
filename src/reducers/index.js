import { combineReducers } from 'redux';
import UnitListReducer from './reducer_unit_list';

const rootReducer = combineReducers({
  units: UnitListReducer,
});

export default rootReducer;
