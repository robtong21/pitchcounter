'use strict'
import React from 'react'
import axios from 'axios'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import counterDefaultVal from './constants/counterDefaultVal'
import Jokes from './components/Jokes'
import Login from './components/Login'
import Marquee from './components/Marquee'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import StatsContainer from './containers/StatsContainer'
import GamesContainer from './containers/GamesContainer'
import PlayersContainer from './containers/PlayersContainer'
import { setTeams } from './action-creators/teams'
import { setGames, setCurrentGame, setGameById } from './action-creators/games'
import { setPlayers, setPitcherById, setMyTeam } from './action-creators/players'

const ExampleApp = connect(
  ({ auth, games }) => ({ user: auth, games: games.games })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {/* <Marquee /> */}
      {/*  {user ? <WhoAmI/> : <Login/>} */}
      </nav>
      {children}
    </div>
)

const onAppEnter = () => {
  axios.get('/api/games')
  .then(res => res.data)
  .then(games => store.dispatch(setGames(games)))
}

const afterSelectingGame = (nextState) => {
  const gameId = nextState.params.gameId
  axios.get('/api/users')
  .then(res => res.data)
  .then(players => {
    console.log('players', players)
    store.dispatch(setPlayers(players))
    store.dispatch(setGameById(gameId))
  })
}

const afterSelectingPlayer = (nextState) => {
  const playerId = nextState.params.playerId
  console.log('playerId', playerId)
  store.dispatch(setPitcherById(playerId))
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp} onEnter={onAppEnter} >
        <IndexRedirect to="/games" />
        <Route path="/games" component={GamesContainer} />
        <Route path="/games/:gameId" component={PlayersContainer} onEnter={afterSelectingGame} />
        <Route path="/players/:playerId" counterDefaultVal={counterDefaultVal} component={StatsContainer} onEnter={afterSelectingPlayer} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
