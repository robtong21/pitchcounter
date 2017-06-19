import React from 'react'

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
        <div className="col-md-12 text-center opponent-team">Now pitching vs.</div>
        <div className="col-md-12 text-center opponent-team"><img src={opponent.logo} className="opponent-logo"/> the {opponent.name}</div>
        {/* <div className="pitches">
          <div className="pitches-total">{stats.totalPitches}</div>
          <div className="stats-innPitches">{stats.currInnPitches}</div>
        </div> */}
      </div>
    </div>
  )
}

export default Marquee
