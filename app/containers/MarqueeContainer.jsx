import React from 'react'
import { connect } from 'react-redux'
import Marquee from '../components/Marquee'

const mapStateToProps = (state) => {
  return {
    game: state.games.selected,
    player: state.players.pitcher,
    opponent: state.opponents.team,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // setOpponent: (opponent) => dispatch(setOppTeam(opponent)),
    // setCurGame: (game) => dispatch(setCurrentGame(game)),
    // setGame: (gameId) => dispatch(setGameById(gameId))
  }
}

const MarqueeContainer = connect(mapStateToProps, mapDispatchToProps)(Marquee)

export default MarqueeContainer
