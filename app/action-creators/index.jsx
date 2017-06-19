import { FETCH_GAMES, FETCH_PLAYERS, SET_CURRENT_GAME, SET_CURRENT_PITCHER, SET_CURRENT_BATTER } from '../constants'

export const fetchGames = games => ({
  type: FETCH_GAMES,
  games
})

export const setCurrentGame = game => ({
  type: SET_CURRENT_GAME,
  game
})

export const fetchPlayers = players => ({
  type: FETCH_PLAYERS,
  players
})

export const setCurrentPitcher = pitcher => ({
  type: SET_CURRENT_PITCHER,
  pitcher
})

export const setCurrentBatter = opponent => ({
  type: SET_CURRENT_BATTER,
  opponent
})
