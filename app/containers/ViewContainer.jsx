import React from 'react'
import { connect } from 'react-redux'
import View from '../components/View'


const mapStateToProps = (state) => {
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
