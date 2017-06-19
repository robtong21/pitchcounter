import React from 'react'
import moment from 'moment'

const Marquee = (props) => {
  const { player, opponent, game } = props
  return (
    <div className="marquee">
      <h1 className='white padding'>Pitch Anything</h1>
      <div className="row raleway">
        <div className="col-md-3">
          <img src={player.photo} className="player-photo" />
        </div>
        <div className="col-md-6 player-id">
          <div className="white player">{player.name} | #{player.number}</div>
          <div className="player-team">{player.team && player.team.year} {player.team && player.team.name}</div>
        </div>
        <div className="col-md-3">
          <img src={player.team && player.team.logo} className="team-logo" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center opponent-team"><span className="now-pitching">Now pitching</span><br/>
        {moment(game.date).format('LL')} at {game.location}
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={opponent.logo} className="opponent-logo"/>
          </div>
          <div className="col-md-6 player-id">
            <div className="white">vs.</div>
            <div className="opponent-team"> the {opponent.name}</div>
          </div>
        </div>
        {/* <div className="pitches">
          <div className="pitches-total">{stats.totalPitches}</div>
          <div className="stats-innPitches">{stats.currInnPitches}</div>
        </div> */}
      </div>
    </div>
  )
}

export default Marquee
