import React, {Component} from 'react';
import { connect } from 'react-redux';

class UnitList extends Component {
  renderList() {
    return (
      this.props.units.map((unit)=>{
        return (
          <li
            key = {unit.unitCode}
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

export default connect(mapStateToProps)(UnitList);
