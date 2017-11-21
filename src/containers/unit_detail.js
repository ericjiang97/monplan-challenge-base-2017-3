import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/**
 * container UnitDetail:
 * represents the detial of selected unit
 */
class UnitDetail extends Component {
  render () {
    const units = this.props.allUnits
    const results = this.props.searchResultUnits
    const unit = this.props.activeUnit

    /**
     * return empty div when:
     * all units haven't been fetched or
     * the search hasn't been kicked off or
     * there's no units in the search result
    */
    if (!units || !results || results.length === 0) {
      return <div />
    }

    /**
     * return message div when:
     * there are units in the search result and
     * a unit has been selected
    */
    if (results.length !== 0 && !unit) {
      return <div>Select a unit to view detail</div>
    }

    const data = unit.data
    return (
      <div className="col-sm-8">
        <h2 className="unit-code-name">{data.unitCode} - {data.unitName}</h2>
        <br />
        <div className="unit-detail">
          <h4>{data.creditPoints} points, SCA Band {data.scaBand}, {data.eftsl} EFTSL</h4>
          <br />

          <strong>Offered</strong>
          <br />
          {/* handle multiple offered and multiple time: */}
          {/* map all the location and time to div*/}
          {data.locationAndTime.map(offered => {
            return <div key={offered.location}>
              {offered.location}
              {/* map all the time to div*/}
              {offered.time.map(sem => {
                return <div key={sem}>{sem}</div>
              })}
              <br />
            </div>
          })}

          <strong>Prerequisites</strong>
          <br />
          {/* returns None when there's no prerequisites */}
          {(data.preqs) ? data.preqs : 'None'}
          <br /><br />

          <strong>Prohibitions</strong>
          <br />
          {/* returns None when there's no prohibitions */}
          {(data.proh) ? data.proh : 'None'}
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
          <progress value={data.enjoyScore} max="5" />
          <br />
          <p>{data.enjoyScore.toFixed(2)}</p>

          <strong>Learn score</strong>
          <br />
          <progress value={data.learnScore} max="5" />
          <br />
          <p>{data.learnScore.toFixed(2)}</p>

        </div>
      </div>
    )
  }
}

UnitDetail.propTypes = {
  activeUnit: PropTypes.object,
  searchResultUnits: PropTypes.array,
  allUnits: PropTypes.object
}

function mapStateToProps (state) {
  return {
    activeUnit: state.units.activeUnit,
    searchResultUnits: state.units.searchResultUnits,
    allUnits: state.units.allUnits
  }
}

export default connect(mapStateToProps)(UnitDetail)
