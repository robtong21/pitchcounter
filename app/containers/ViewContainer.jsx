import React from 'react'
import { connect } from 'react-redux'
import View from '../components/View'


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

const ViewContainer = connect(mapStateToProps, mapDispatchToProps)(View)

export default ViewContainer
