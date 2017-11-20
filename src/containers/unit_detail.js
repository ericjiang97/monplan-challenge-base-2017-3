import React, {Component} from 'react';
import { connect } from 'react-redux';


class UnitDetail extends Component {
  render() {
    const units = this.props.allUnits;
    const results = this.props.searchResultUnits;
    const unit = this.props.activeUnit;

    if (!units || !results || !unit){
      return <div>  </div>
    }

    if (results.length !== 0 && !unit){
      return <div>Select a unit to view detail</div>
    }

    const data = unit.data;
    return (
      <div className="col-sm-8">
        <h2 className="unit-code-name">{data.unitCode} - {data.unitName}</h2>
        <br />
        <div className="unit-detail">
          <h4>{data.creditPoints} points, SCA Band {data.scaBand}, {data.eftsl} EFTSL</h4>
          <br />

          <strong>Offered</strong>
          <br />
          {data.locationAndTime.map(offered => {
            return <div key={offered.location}>
              {offered.location}
              {offered.time.map(sem => {
                return <div key={sem}>{sem}</div>
              })}
              <br />
            </div>
          })}

          <strong>Prerequisites</strong>
          <br />
          {(data.preqs)? data.preqs : 'None'}
          <br /><br />

          <strong>Prohibitions</strong>
          <br />
          {(data.proh)? data.proh : 'None'}
          <br /><br />

          <strong>Faculty</strong>
          <br />
          {data.faculty}
          <br /><br />

          <strong>Synopsis</strong>
          <br />
          {data.description}
          <br /><br />

          <strong>Enjoy score</strong>
          <br />
          <progress value={data.enjoyScore} max="5"></progress>
          <br />
          <p>{data.enjoyScore.toFixed(2)}</p>

          <strong>Learn score</strong>
          <br />
          <progress value={data.learnScore} max="5"></progress>
          <br />
          <p>{data.learnScore.toFixed(2)}</p>

        </div>
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
