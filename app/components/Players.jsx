import React from 'react'
import { Link } from 'react-router'

const Players = (props) => {
  const list = props.roster
  console.log('list', list)
  console.log('selectedGame', props.selectedGame)
  console.log('opponent', props.opponent)
  console.log('setOpponent', props.setOpponent)
  props.setOpponent(props.opponent)
  return (
    <div>
      <h1>Select a player</h1>
      <ul>
      {list.map(player => {
        return (
          <div className="list-group-item" key={ player.id }>
            <Link to={`/players/${player.id}`} onClick={() => props.setPitcher(player.id)}><img src={player.photo} className="players-select-photo" />#{player.number} {player.name}</Link>
          </div>
        )
      })}
      </ul>
    </div>
  )
}

export default Players
