import { combineReducers } from 'redux';
import UnitListReducer from './reducer_unit_list';
import ActiveUnitReducer from './reducer_active_unit';
import AllUnitsReducer from './reducer_all_units';

const rootReducer = combineReducers({
  units: UnitListReducer,
  activeUnit: ActiveUnitReducer,
  allUnits: AllUnitsReducer
});

export default rootReducer;
