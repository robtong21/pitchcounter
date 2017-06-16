import React from 'react'
import { connect } from 'react-redux'
import Players from '../components/Players'
import { setOppTeam } from '../action-creators/opponents'
import { setMyTeam } from '../action-creators/players'

const mapStateToProps = (state) => {
  console.log('state in PlayersContainer', state)
  console.log('players in PlayersContainer', state.players)
  console.log('oppTeam in PlayersContainer', state.opponents)
  console.log('selectedGame in PlayersContainer', state.games.selected)
  return {
    roster: state.players.roster,
    selectedGame: state.games.selected,
    opponent: state.games.selected.team,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setOpponent: (team) => dispatch(setOppTeam(team)),
    setTeam: (teamName) => dispatch(setMyTeam(teamName))
  }
}

const PlayersContainer = connect(mapStateToProps, mapDispatchToProps)(Players)

export default PlayersContainer
