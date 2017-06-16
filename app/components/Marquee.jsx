import React from 'react'

const Marquee = (props) => {
  const { player, opponent, stats, game } = props
  console.log('game in Marquee', game)
  console.log('player in Marquee', player)
  console.log('opponent in Marquee', opponent)
  return (
    <div className="marquee">
      <div>
        <img src={player.photo} className="player-photo" />
        <div className="player-id">
          <div className="player-number">{player.number}</div>
          <div className="player-name">{player.name}</div>
          <div className="player-team">{player.team && player.team.name}</div>
        </div>
        <div className="opponent-team">{opponent.name}</div>
        {/* <div className="pitches">
          <div className="pitches-total">{stats.totalPitches}</div>
          <div className="stats-innPitches">{stats.currInnPitches}</div>
        </div> */}
      </div>
    </div>
  )
}

export default Marquee
