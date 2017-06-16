import axios from 'axios'
import { SET_GAMES, SET_CURRENT_GAME } from '../constants'

export const setGames = games => ({
  type: SET_GAMES,
  games
})

export const setCurrentGame = game => ({
  type: SET_CURRENT_GAME,
  game
})

export const setGameById = gameId => {
  return dispatch => {
    axios.get(`/api/games/${gameId}`)
    .then(res => {
      dispatch(setCurrentGame(res.data))
    })
  }
}
