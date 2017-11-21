import axios from 'axios'

import { FETCH_ALL_UNITS } from '../constants/action_types'
import { ALL_UNITS_URL } from '../constants/api'

export function fetchAllUnits () {
  const request = axios.get(ALL_UNITS_URL)

  return (
    {
      type: FETCH_ALL_UNITS,
      payload: request
    }
  )
}
