import React from 'react'

const Stats = ({battersFaced, totalPitches, totalStrikes, strikesCalled, strikesSwung, strikesFouled, balls, firstPitchStrikes, thirdPitchStrikes, firstPitchStrikesOpp, thirdPitchStrikesOpp, K, BB, hits, outs, HBP, ROE, IP}) => {
  let firstPitchPct, thirdPitchPct, strikeToBallPct
  firstPitchStrikesOpp === 0 ? firstPitchPct = 0 : firstPitchPct = ((firstPitchStrikes/firstPitchStrikesOpp)*100).toFixed(1)
  thirdPitchStrikesOpp === 0 ? thirdPitchPct = 0: thirdPitchPct = ((thirdPitchStrikes/thirdPitchStrikesOpp)*100).toFixed(1)
  totalStrikes+balls === 0 ? strikeToBallPct = 0 : strikeToBallPct = (totalStrikes/(totalStrikes+balls)*100).toFixed(1)
  return (
    <div className="tesla-counter">
      <div className="container order col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
        <div className="order-column text-center">
            <div><strong>Strikes<br/>Called</strong></div>
            <div className="player center">{strikesCalled}</div>
        </div>
        <div className="order-column text-center">
            <div><strong>Strikes<br/>Swung</strong></div>
            <div className="player center">{strikesSwung}</div>
        </div>
        <div className="order-column text-center">
            <div><strong>Strikes<br/>Fouled</strong></div>
            <div className="player center">{strikesFouled}</div>
        </div>
        <div className="order-column text-center">
            <div><strong>Total<br/>Balls</strong></div>
            <div className="player center">{balls}</div>
        </div>
        <div className="order-column text-center">
            <div><strong>Innings<br/>Pitched</strong></div>
            <div className="player center">{IP}</div>
        </div>
        <div className="order-column text-center">
            <div><strong>Hit By<br/>Pitch</strong></div>
            <div className="player center">{HBP}</div>
        </div>
      </div>
      <div className="container order col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
        <div className="order-column text-center">
            <div><strong>Batters<br/>Faced</strong></div>
            <div className="player center">{battersFaced}</div>
        </div>
        <div className="order-column text-center">
            <div><strong>Strike<br/>outs</strong></div>
            <div className="player center">{K}</div>
        </div>
        <div className="order-column text-center">
            <div><br/><strong>BBs</strong></div>
            <div className="player center">{BB}</div>
        </div>
        <div className="order-column text-center">
            <div><strong>Hits<br/>Allowed</strong></div>
            <div className="player center">{hits}</div>
        </div>
        <div className="order-column text-center">
            <div><br/><strong>Outs</strong></div>
            <div className="player center">{outs}</div>
        </div>
        <div className="order-column text-center">
            <div><strong>Reached<br/>On Error</strong></div>
            <div className="player center">{ROE}</div>
        </div>
      </div>
      <div className="container order col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
        <div className="order-column text-center">
              <div><strong>Strike to<br/>Ball Ratio</strong></div>
              <div className="player center">{strikeToBallPct}%</div>
          </div>
          <div className="order-column text-center">
              <div><strong>First Pitch<br/>Strikes %</strong></div>
              <div className="player center">{firstPitchPct}%</div>
          </div>
          <div className="order-column text-center">
              <div><strong>Third Pitch<br/>Strikes %</strong></div>
              <div className="player center">{thirdPitchPct}%</div>
          </div>
        </div>
    </div>
  )
}

export default Stats
