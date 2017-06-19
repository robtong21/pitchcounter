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
    <div className='gray'>
      <h1 className='players-selection'>Select a player</h1>
      <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2'>
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
    </div>
  )
}

export default Players
