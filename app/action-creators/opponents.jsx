import axios from 'axios'
import { SET_OPP_PLAYERS, SET_OPP_TEAM, SET_OPP_BATTER, SET_OPP_PITCHER} from '../constants'

export const setOppPlayers = oppPlayers => ({
  type: SET_OPP_PLAYERS,
  oppPlayers
})

export const setOppPitcher = oppPitcher => ({
  type: SET_OPP_PITCHER,
  oppPitcher
})

export const setOppPitcherById = oppPlayerId => {
  return dispatch => {
    axios.get(`/api/opponents/${oppPlayerId}`)
    .then(res => dispatch(setOppPitcher(res.data)))
  }
}

export const setOppBatter = oppBatter => ({
  type: SET_OPP_BATTER,
  oppBatter
})

export const setOppBatterById = opponentId => {
  return dispatch => {
    axios.get(`/api/opponents/${opponentId}`)
    .then(res => {
      console.log('res in getOpponentById action-creator', res)
      dispatch(setOppBatter(res.data))
    })
  }
}

export const setOppTeam = oppTeam => ({
  type: SET_OPP_TEAM,
  oppTeam
})
