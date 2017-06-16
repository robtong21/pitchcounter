import axios from 'axios'
import { SET_TEAMS } from '../constants'

export const setTeams = teams => ({
  type: SET_TEAMS,
  teams
})
