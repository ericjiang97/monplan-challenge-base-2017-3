import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchUnits } from '../actions/action_search_units'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

/**
 * container SearchBar:
 * represents the search bar
 */
class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  // @callback
  onInputChange (event) {
    this.setState({ term: event.target.value })
  }

  // @callback
  onFormSubmit (event) {
    event.preventDefault()
    this.props.searchUnits(this.state.term)
  }

  render () {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          placeholder="unit code / unit name"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"><i className="fa fa-search" aria-hidden="true" /></button>
        </span>
      </form>
    )
  }
}

SearchBar.propTypes = {
  searchUnits: PropTypes.func
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ searchUnits }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
