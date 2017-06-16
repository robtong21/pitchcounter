import React from 'react'
import { connect } from 'react-redux'
import Games from '../components/Games'
import { setGameById, setCurrentGame } from '../action-creators/games'
import { setOppTeam } from '../action-creators/opponents'

const mapStateToProps = (state) => {
  console.log('games in GamesContainer', state.games.list)
  return {
    games: state.games.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // setOpponent: (opponent) => dispatch(setOppTeam(opponent)),
    // setCurGame: (game) => dispatch(setCurrentGame(game)),
    // setGame: (gameId) => dispatch(setGameById(gameId))
  }
}

const GamesContainer = connect(mapStateToProps, mapDispatchToProps)(Games)

export default GamesContainer
