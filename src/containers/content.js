import React, { Component } from 'react'
import SearchBar from '../containers/search_bar'
import UnitList from '../containers/unit_list'
import UnitDetail from '../containers/unit_detail'
import { fetchAllUnits } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Content extends Component {
  componentWillMount(){
    this.props.fetchAllUnits();
  }

  render () {
    if (!this.props.allUnits){
      return <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
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

function mapStateToProps(state){
  return {
    allUnits: state.allUnits
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchAllUnits }, dispatch)
}

export default connect(mapStateToProps , mapDispatchToProps)(Content);
