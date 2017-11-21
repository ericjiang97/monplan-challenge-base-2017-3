import axios from 'axios'

import { UNIT_SELECTED } from '../constants/action_types'
import { UNIT_DETAIL_URL } from '../constants/api'

export function selectUnit (unit) {
  const request = axios.get(`${UNIT_DETAIL_URL}${unit.unitCode}`)

  return (
    {
      type: UNIT_SELECTED,
      payload: request
    }
  )
}
