import { counterDefaultVal } from '../constants/counterDefaultVal';

export const ballUp = (value) => {
  return {
    type: 'BALL_UP',
    value,
    maxValue: counterDefaultVal.ballConfig.max
  }
}

export const ballDown = (value) => {
  return {
    type: 'BALL_DOWN',
    value,
    minValue: counterDefaultVal.ballConfig.min
  }
}

export const strikeUp = (value) => {
  return {
    type: 'STRIKE_UP',
    value,
    maxValue: counterDefaultVal.strikeConfig.max
  }
}

export const strikeDown = (value) => {
  return {
    type: 'STRIKE_DOWN',
    value,
    minValue: counterDefaultVal.strikeConfig.min
  }
}
