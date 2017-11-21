import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUnit } from '../actions/action_select_unit'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

/**
 * container UnitList:
 * represents a list of search result units
 */
class UnitList extends Component {
  constructor (props) {
    super(props)

    this.renderList = this.renderList.bind(this)
  }

  // @returns unit list item
  renderList () {
    return (
      // map an array of units to unit list items
      this.props.searchResultUnits.map((unit) => {
        return (
          <li
            key={unit.unitCode}
            onClick={() => this.props.selectUnit(unit)}
            className="list-group-item">{unit.unitCode} - {unit.unitName}</li>
        )
      })
    )
  }

  render () {
    // when the search hasn't been kicked off
    if (!this.props.searchResultUnits) {
      return <div >Search for a unit to get started </div>
    }

    // when there's no units in the search result
    if (this.props.searchResultUnits.length === 0) {
      return <div > No units found </div>
    }

    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

UnitList.propTypes = {
  searchResultUnits: PropTypes.array
}

function mapStateToProps (state) {
  return {
    searchResultUnits: state.units.searchResultUnits
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectUnit }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitList)
