import { UNIT_SELECTED } from '../constants/action_types';

export function selectUnit(unit){
  return (
    {
      type: UNIT_SELECTED,
      payload: unit
    }
  )
}
