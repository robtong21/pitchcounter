import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'

const Games = (props) => {
  const list = props.games
  return (
    <div className="gray">
      <h1>Welcome to <span className='white'>Pitch Anything</span></h1>
      <h1 className='padding-240'>Select a game to statify</h1>
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
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
    </div>
  )
}

export default Games
