import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'

const Games = (props) => {
  const list = props.games
  return (
    <div>
      <h1>Select a game</h1>
      <ul>
      {list.map(game => {
        return (
          <div className="list-group-item" key={ game.id }>
            <Link to={`/games/${game.id}`}>{moment(game.date).utc().format('MMMM D, YYYY')}, {game.time} at {game.location} vs {game.team.name}</Link>
          </div>
        )
      })}
      </ul>
    </div>
  )
}

export default Games
