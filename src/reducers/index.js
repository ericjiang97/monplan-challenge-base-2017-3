import { combineReducers } from 'redux';
import UnitsReducer from './reducer_units';
import ActiveUnitReducer from './reducer_active_unit';

const rootReducer = combineReducers({
  units: UnitsReducer,
  activeUnit: ActiveUnitReducer,
});

export default rootReducer;
