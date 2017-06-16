import axios from 'axios'
import { SET_PLAYERS, SET_MY_TEAM, SET_CURRENT_PITCHER, SET_CURRENT_BATTER } from '../constants'

export const setPlayers = players => ({
  type: SET_PLAYERS,
  players
})

export const setCurrentPitcher = pitcher => ({
  type: SET_CURRENT_PITCHER,
  pitcher
})

export const setPitcherById = playerId => {
  return dispatch => {
    axios.get(`/api/users/${playerId}`)
    .then(res => {
      console.log('res in action-creators/players', res.data)
      dispatch(setCurrentPitcher(res.data))
    })
  }
}

export const setCurrentBatter = batter => ({
  type: SET_CURRENT_BATTER,
  batter
})

export const setBatterById = playerId => {
  return dispatch => {
    axios.get(`/api/users/${playerId}`)
    .then(res => {
      console.log('res in action-creators/players', res)
      dispatch(setCurrentBatter(res.data))
    })
  }
}

export const setMyTeam = myTeam => ({
  type: SET_MY_TEAM,
  myTeam
})

export const setTeamById = teamId => {
  return dispatch => {
    axios.get(`/api/teams/${teamId}`)
    .then(res => {
      dispatch(setMyTeam(res.data))
    })
  }
}
