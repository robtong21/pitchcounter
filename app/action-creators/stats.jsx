import axios from 'axios'
import { counterDefaultVal } from '../constants/counterDefaultVal';

export const addStrikeCalled = (value) => {
  return {
    type: 'ADD_STRIKE_CALLED',
    value: 1
  }
}

export const undoStrikeCalled = (value) => {
  return {
    type: 'UNDO_STRIKE_CALLED',
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

export const clearState = (stats) => {
  return {
    type: 'CHANGE_PITCHER',
    stats
  }
}

export const updateStats = (pitcherStats, pitcherId, gameId) => {
  return dispatch => {
    axios.post(`/api/stats/`, {
      ...pitcherStats,
      game_id: gameId,
      user_id: pitcherId})
    .then(res => {
      console.log('res.data in stats.jsx', res.data)
      dispatch(clearState(res.data))
    })
    .catch(error => console.error(error))
  }
}
