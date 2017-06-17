import axios from 'axios'
import { counterDefaultVal } from '../constants/counterDefaultVal';

export const ballUp = (value) => {
  return {
    type: 'BALL_UP',
    value,
    step: counterDefaultVal.balls.step,
    maxValue: counterDefaultVal.balls.max
  }
}

export const ballDown = (value) => {
  return {
    type: 'BALL_DOWN',
    value,
    step: counterDefaultVal.balls.step,
    minValue: counterDefaultVal.balls.min
  }
}

export const strikeUp = (value) => {
  return {
    type: 'STRIKE_UP',
    value,
    step: counterDefaultVal.strikes.step,
    maxValue: counterDefaultVal.strikes.max
  }
}

export const strikeDown = (value) => {
  return {
    type: 'STRIKE_DOWN',
    value,
    step: counterDefaultVal.strikes.step,
    minValue: counterDefaultVal.strikes.min
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
