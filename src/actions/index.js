import axios from 'axios';

import { UNIT_SELECTED, FETCH_ALL_UNITS } from '../constants/action_types';
import { ALL_UNITS_URL, UNIT_DETAIL_URL } from '../constants/api';


export function selectUnit(unit){
  return (
    {
      type: UNIT_SELECTED,
      payload: unit
    }
  )
}

export function fetchAllUnits(){
  const request = axios.get(ALL_UNITS_URL);

  return(
    {
      type: FETCH_ALL_UNITS,
      payload: request
    }
  )
}
