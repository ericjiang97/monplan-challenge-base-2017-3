import { combineReducers } from 'redux';
import UnitListReducer from './reducer_unit_list';
import ActiveUnitReducer from './reducer_active_unit';

const rootReducer = combineReducers({
  units: UnitListReducer,
  activeUnit: ActiveUnitReducer
});

export default rootReducer;
