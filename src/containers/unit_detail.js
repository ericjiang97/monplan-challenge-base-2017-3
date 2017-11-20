import React, {Component} from 'react';
import { connect } from 'react-redux';


class UnitDetail extends Component {
  render() {
    const units = this.props.allUnits;
    const results = this.props.searchResultUnits;
    const unit = this.props.activeUnit;

    if (!units || !results){
      return <div>  </div>
    }

    if (results.length !== 0 && !unit){
      return <div>Select a unit to view detail</div>
    }

    const data = unit.data;
    return (
      <div className="col-sm-8">
        <h3>{data.unitCode}: {data.unitName}</h3>
        <br />
        <p>{data.description}</p>
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
