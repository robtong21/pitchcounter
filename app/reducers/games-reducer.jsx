import { SET_GAMES, SET_CURRENT_GAME } from '../constants'

const initialGameState = {
  list: [],
  selected: {},
}

export default function(state = initialGameState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case SET_GAMES:
      newState.list = action.games
      break
    case SET_CURRENT_GAME:
      newState.selected = action.game
      break
    default:
      return state
  }
  // console.log('newState in games reducer', newState)
  return newState
}
