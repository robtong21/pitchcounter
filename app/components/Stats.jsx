import React from 'react'

const Stats = ({battersFaced, totalPitches, totalStrikes, strikesCalled, strikesSwung, strikesFouled, balls, firstPitchStrikes, thirdPitchStrikes, firstPitchStrikesOpp, thirdPitchStrikesOpp, K, BB, hits, outs, HBP, ROE, IP}) => {
  let firstPitchPct, thirdPitchPct, strikeToBallPct
  firstPitchStrikesOpp === 0 ? firstPitchPct = 0 : firstPitchPct = ((firstPitchStrikes/firstPitchStrikesOpp)*100).toFixed(1)
  thirdPitchStrikesOpp === 0 ? thirdPitchPct = 0: thirdPitchPct = ((thirdPitchStrikes/thirdPitchStrikesOpp)*100).toFixed(1)
  totalStrikes+balls === 0 ? strikeToBallPct = 0 : strikeToBallPct = (totalStrikes/(totalStrikes+balls)*100).toFixed(1)
  return (
    <div className="tesla-counter">
      <div className="order order-header row thead-inverse">
        <div className="order-column">
            <div><strong>Total<br/>Pitches</strong></div>
            <div className="center">{totalPitches}</div>
        </div>
        <div className="order-column">
            <div><strong>Total<br/>Strikes</strong></div>
            <div className="center">{totalStrikes}</div>
        </div>
        <div className="order-column">
            <div><strong>Strikes<br/>Called</strong></div>
            <div className="center">{strikesCalled}</div>
        </div>
        <div className="order-column">
            <div><strong>Strikes<br/>Swung</strong></div>
            <div className="center">{strikesSwung}</div>
        </div>
        <div className="order-column">
            <div><strong>Strikes<br/>Fouled</strong></div>
            <div className="center">{strikesFouled}</div>
        </div>
        <div className="right">
            <div><strong>Total<br/>Balls</strong></div>
            <div className="center">{balls}</div>
        </div>
      </div>
      <div className="order order-header row thead-inverse">
        <div className="order-column">
            <div><strong>Batters<br/>Faced</strong></div>
            <div className="center">{battersFaced}</div>
        </div>
        <div className="order-column">
            <div><strong>Ks</strong></div>
            <div className="center">{K}</div>
        </div>
        <div className="order-column">
            <div><strong>BBs</strong></div>
            <div className="center">{BB}</div>
        </div>
        <div className="order-column">
            <div><strong>Hits<br/>Allowed</strong></div>
            <div className="center">{hits}</div>
        </div>
        <div className="order-column">
            <div><strong>Outs</strong></div>
            <div className="center">{outs}</div>
        </div>
        <div className="order-column">
            <div><strong>Reached<br/>On Error</strong></div>
            <div className="center">{ROE}</div>
        </div>
      </div>
      <div className="order order-header row thead-inverse">
        <div className="order-column">
              <div><strong>Strike to<br/>Ball Ratio %</strong></div>
              <div className="center">{strikeToBallPct} %</div>
          </div>
          <div className="order-column">
              <div><strong>First Pitch<br/>Strikes %</strong></div>
              <div className="center">{firstPitchPct} %</div>
          </div>
          <div className="order-column">
              <div><strong>Third Pitch<br/>Strikes %</strong></div>
              <div className="center">{thirdPitchPct} %</div>
          </div>
          <div className="order-column">
            <div><strong>Hit By<br/>Pitch</strong></div>
            <div className="center">{HBP}</div>
          </div>
          <div className="right">
            <div><strong>IP</strong></div>
            <div>{IP}</div>
          </div>
        </div>
    </div>
  )
}

export default Stats
