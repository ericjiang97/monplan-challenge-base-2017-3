import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectUnit } from '../actions/action_select_unit';
import { bindActionCreators } from 'redux';

class UnitList extends Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    return (
      this.props.searchResultUnits.map((unit)=>{
        return (
          <li
            key = {unit.unitCode}
            onClick={() => this.props.selectUnit(unit)}
            className="list-group-item">{unit.unitCode} {unit.unitName}</li>
        )
      })
    )
  }

  render(){
    if (!this.props.searchResultUnits){
      return <div >Search for a unit to get started </div>;
    }

    if (this.props.searchResultUnits.length === 0){
      return <div > No units found </div>;
    }

    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    searchResultUnits: state.units.searchResultUnits,
    activeUnit: state.activeUnit
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectUnit }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitList);
