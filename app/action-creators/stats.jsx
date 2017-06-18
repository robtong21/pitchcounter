import axios from 'axios'
import { counterDefaultVal } from '../constants/counterDefaultVal';

export const addStrikeCalled = (value) => {
  return {
    type: 'ADD_STRIKE_CALLED',
    value: 1
  }
}

export const addStrikeSwung = (value) => {
  return {
    type: 'ADD_STRIKE_SWUNG',
    value: 1
  }
}

export const addStrikeFouled = (value) => {
  return {
    type: 'ADD_STRIKE_FOULED',
    value: 1
  }
}

export const addBall = (value) => {
  return {
    type: 'ADD_BALL',
    value: 1
  }
}

export const addHit = (value) => {
  return {
    type: 'ADD_HIT',
    value: 1
  }
}

export const addOut = (value) => {
  return {
    type: 'ADD_OUT',
    value: 1
  }
}

export const addRoe = (value) => {
  return {
    type: 'ADD_ROE',
    value: 1
  }
}

export const addHbp = (value) => {
  return {
    type: 'ADD_HBP',
    value: 1
  }
}

export const updateStats = (playerId, gameId) => {
  return dispatch => {
    axios.post(`/api/stats/`, {game_id: gameId, user_id: playerId})
    .then(res => {
      console.log('res in stats.jsx', res)
      dispatch(postPitcherGameStats(res.data))
    })
  }
}
