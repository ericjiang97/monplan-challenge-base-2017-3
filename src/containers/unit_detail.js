import React, {Component} from 'react';
import { connect } from 'react-redux';


class UnitDetail extends Component {
  render() {
    if (!this.props.unit){
      return <div>Select a unit to get started.</div>
    }

    return (
      <div>
        <div>Unit code: {this.props.unit.unitCode}</div>
        <div>Unit name: {this.props.unit.unitName}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    unit: state.activeUnit
  };
}

export default connect(mapStateToProps)(UnitDetail);
