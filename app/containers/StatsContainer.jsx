import React from 'react'
import { connect } from 'react-redux'
import Stats from '../components/Stats'

const mapStateToProps = (state) => {
  console.log('state', state)
  console.log('selectedPitcher', state.players)
  console.log('opponents', state.opponents)
  return {
    selectedGame: state.games.selected,
    selectedPlayer: state.players.pitcher,
    selectedOpponent: state.opponents.team,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const StatsContainer = connect(mapStateToProps, mapDispatchToProps)(Stats)

export default StatsContainer
