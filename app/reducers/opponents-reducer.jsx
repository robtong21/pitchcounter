import { SET_OPP_PLAYERS, SET_OPP_TEAM, SET_OPP_BATTER, SET_OPP_PITCHER } from '../constants'

const initialOpponentState = {
  team: {},
  roster: [],
  batter: {},
  pitcher: {},
}

export default function(state = initialOpponentState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case SET_OPP_PLAYERS:
      newState.roster = action.oppPlayers
      break
    case SET_OPP_TEAM:
      newState.team = action.oppTeam
      break
    case SET_OPP_BATTER:
      newState.batter = action.oppBatter
      break
    case SET_OPP_PITCHER:
      newState.pitcher = action.oppPitcher
      break
    default:
      return state
  }
  console.log('newState in opponents reducer', newState)
  return newState
}
