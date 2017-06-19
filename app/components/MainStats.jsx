import React from 'react'

const Stats = ({totalPitches, totalStrikes, balls, strikes}) => {
  let strikePct
  (totalPitches === 0) ? strikePct = 0 : strikePct = ((totalStrikes/totalPitches)*100).toFixed(1)
  return (
    <div className="row-test">
      <div className="row order order-header thead-inverse container col-xs-8 col-sm-8 col-md-6 col-lg-6 col-xs-offset-2 col-sm-offset-2 col-md-offset-3 col-lg-offset-3">
        <div className="col content order-column text-center">
            <div className="strikes bold center">{totalStrikes}</div>
            <div><strong>Strikes</strong></div>
        </div>
        <div className="col content order-column text-center">
            <div className="pitches bold center">{totalPitches}</div>
            <div><strong>Pitches</strong></div>
        </div>
        <div className="col content order-column text-center">
            <div className="strikes bold center">{strikePct}%</div>
            <div><strong>Strike Pct</strong></div>
        </div>
      </div>
      <div className="order order-header thead-inverse container col-xs-8 col-sm-8 col-md-6 col-lg-6 col-xs-offset-2 col-sm-offset-2 col-md-offset-3 col-lg-offset-3">
        <div className="order-column">
            <div className="pitches bold right">{balls}</div>
            <div>Balls</div>
        </div>
        <div className="order-column">
            <div className="pitches bold right">{strikes}</div>
            <div>Strikes</div>
        </div>
      </div>
    </div>
  )
}

export default Stats
