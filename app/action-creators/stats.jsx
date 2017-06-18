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
    value
  }
}

export const addStrikeFouled = (value) => {
  return {
    type: 'ADD_STRIKE_FOULED',
    value
  }
}

export const addBall = (value) => {
  return {
    type: 'ADD_BALL',
    value
  }
}

export const addHit = (value) => {
  return {
    type: 'ADD_HIT',
    value
  }
}

export const addOut = (value) => {
  return {
    type: 'ADD_OUT',
    value
  }
}

export const addRoe = (value) => {
  return {
    type: 'ADD_BALL',
    value
  }
}

export const addHbp = (value) => {
  return {
    type: 'ADD_HBP',
    value
  }
}

export const updateStats = statId => {
  return dispatch => {
    axios.post(`/api/stats/`)
    .then(res => {
      dispatch(postPitcherGameStats(res.data))
    })
  }
}
