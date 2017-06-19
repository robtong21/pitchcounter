import React from 'react'

const Controls = (props) => (
  <div className="row">
    <div className="center text-center controls">
      <button className='btn btn-warning'
        onClick={(e) => props.strikeCalled(e, props.pitcher, props.game)}
      >Strike Called
      </button>
      <button className='btn btn-warning'
        onClick={(e) => props.strikeSwung(e, props.pitcher, props.game)}
      >Strike Swung & Missed
      </button>
      <button className='btn btn-warning'
        onClick={(e) => props.strikeFouled(e, props.pitcher, props.game)}
      >Strike Fouled
      </button>
      <button className='btn btn-secondary'
        onClick={(e) => props.ball(e, props.pitcher, props.game)}
      >Ball
      </button>
      <br/><br/>
      <button className='btn btn-warning'
        onClick={(e) => props.out(e, props.pitcher, props.game)}
      >Out
      </button>
      <button className='btn btn-warning'
        onClick={(e) => props.roe(e, props.pitcher, props.game)}
      >Reached on Error
      </button>
      <button className='btn btn-secondary'
        onClick={(e) => props.hit(e, props.pitcher, props.game)}
      >Hit
      </button>
      <button className='btn btn-secondary'
        onClick={(e) => props.hbp(e, props.pitcher, props.game)}
      >Hit By Pitch
      </button>
      <button className='btn btn-info'
        onClick={(e) => props.changePitcher(e, props.stats, props.pitcher.id, props.game.id)}
      >Change Pitcher
      </button>
    </div>
  </div>
)

export default Controls
