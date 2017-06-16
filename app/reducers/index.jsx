import { combineReducers } from 'redux'
import gamesReducer from './games-reducer'
import playersReducer from './players-reducer'
import opponentsReducer from './opponents-reducer'

const rootReducer = combineReducers({
  // auth: require('./auth').default,
  games: gamesReducer,
  players: playersReducer,
  opponents: opponentsReducer
})

export default rootReducer
