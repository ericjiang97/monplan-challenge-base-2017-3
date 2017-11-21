import React, { Component } from 'react'
import SearchBar from '../containers/search_bar'
import UnitList from '../containers/unit_list'
import UnitDetail from '../containers/unit_detail'
import { fetchAllUnits } from '../actions/action_fetch_all_units'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Content extends Component {
  componentWillMount () {
    this.props.fetchAllUnits()
  }

  render () {
    if (!this.props.allUnits) {
      return <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
    }

    return (
      <div>
        <SearchBar />
        <div className="row">
          <UnitList />
          <UnitDetail />
        </div>
      </div>
    )
  }
}

Content.propTypes = {
  allUnits: PropTypes.object,
  fetchAllUnits: PropTypes.func
}

function mapStateToProps (state) {
  return {
    allUnits: state.units.allUnits
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchAllUnits }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
