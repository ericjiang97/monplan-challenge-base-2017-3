import { FETCH_ALL_UNITS } from '../constants/action_types';

export default function(state = null, action){
  switch (action.type){
    case FETCH_ALL_UNITS:
      return action.payload;
    default:
      return state;
  }
}
