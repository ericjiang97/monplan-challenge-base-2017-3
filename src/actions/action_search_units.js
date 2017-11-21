import { SEARCH_UNITS } from '../constants/action_types'

export function searchUnits (term) {
  return (
    {
      type: SEARCH_UNITS,
      payload: term
    }
  )
}
