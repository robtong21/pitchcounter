import { SET_PLAYERS, SET_MY_TEAM, SET_CURRENT_PITCHER, SET_CURRENT_BATTER } from '../constants'

const initialPlayerState = {
  team: '',
  roster: [],
  pitcher: {},
  batter: {},
}

export default function(state = initialPlayerState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case SET_PLAYERS:
      newState.roster = action.players
      break
    case SET_MY_TEAM:
      newState.team = action.myTeam
      break
    case SET_CURRENT_PITCHER:
      newState.pitcher = action.pitcher
      break
    case SET_CURRENT_BATTER:
      newState.batter = action.bater
      break
    default:
      return state
  }
  // console.log('newState in players reducer', newState)
  return newState
}
