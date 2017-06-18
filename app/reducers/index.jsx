import { combineReducers } from 'redux'
import gamesReducer from './games-reducer'
import playersReducer from './players-reducer'
import opponentsReducer from './opponents-reducer'
import statsReducer from './stats-reducer'

const rootReducer = combineReducers({
  // auth: require('./auth').default,
  games: gamesReducer,
  players: playersReducer,
  opponents: opponentsReducer,
  stats: statsReducer
})

export default rootReducer
