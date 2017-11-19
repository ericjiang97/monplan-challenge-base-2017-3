import { UNIT_SELECTED } from '../constants/action_types';

export default function(state = null, action){
  switch (action.type){
    case UNIT_SELECTED:
      return action.payload
    default:
      return state
  }
}
