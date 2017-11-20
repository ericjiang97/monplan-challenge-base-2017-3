import { SEARCH_UNITS } from '../constants/action_types';

export default function(state = { allUnits: null, searchResultUnits: null }, action){
  switch (action.type){

    case SEARCH_UNITS:
      const searchTerm = action.payload.toLowerCase();

      var resultUnits = state.allUnits.filter((unit) => {
        return unit.unitName.toLowerCase().indexOf(searchTerm) !== -1
        || unit.unitCode.toLowerCase().indexOf(searchTerm) !== -1
      });

      return { allUnits: state.allUnits, searchResultUnits: resultUnits };

    default:
      return state;
  }
}
