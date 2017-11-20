import React, {Component} from 'react';
import { connect } from 'react-redux';


class UnitDetail extends Component {
  render() {
    if (!this.props.allUnits || !this.props.searchResultUnits){
      return <div>  </div>
    }

    if (!this.props.activeUnit){
      return <div>Select a unit to get started</div>
    }

    return (
      <div className="col-sm-8">
        <div>Unit code: {this.props.activeUnit.unitCode}</div>
        <div>Unit name: {this.props.activeUnit.unitName}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    activeUnit: state.activeUnit,
    searchResultUnits: state.units.searchResultUnits,
    allUnits: state.units.allUnits
  };
}

export default connect(mapStateToProps)(UnitDetail);
