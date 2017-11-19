import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectUnit } from '../actions/index';
import { bindActionCreators } from 'redux';

class UnitList extends Component {
  renderList() {
    return (
      this.props.units.map((unit)=>{
        return (
          <li
            key = {unit.unitCode}
            onClick={() => this.props.selectUnit(unit)}
            className="list-group-item">{unit.unitCode}</li>
        )
      })
    )
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    units: state.units
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectUnit:selectUnit}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitList);
