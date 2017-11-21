import { SEARCH_UNITS, FETCH_ALL_UNITS, UNIT_SELECTED } from '../constants/action_types'

const initialState = {
  allUnist: null,
  searchResultUnits: null,
  activeUnit: null
}

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_ALL_UNITS:
      return {
        ...state,
        allUnits: action.payload
      }

    case UNIT_SELECTED:
      return {
        ...state,
        activeUnit: action.payload
      }

    case SEARCH_UNITS:
      const searchTerm = action.payload.toLowerCase()

      // units will be in search results
      // if unit code or unit name contain search term
      var resultUnits = state.allUnits.data.filter((unit) => {
        return unit.unitName.toLowerCase().indexOf(searchTerm) !== -1 ||
        unit.unitCode.toLowerCase().indexOf(searchTerm) !== -1
      })

      return {
        ...state,
        searchResultUnits: resultUnits,
        // deactivate activated unit when search another unit
        // for clearing unit detail
        activeUnit: null
      }

    default:
      return state

  }
}
