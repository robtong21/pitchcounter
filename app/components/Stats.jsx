import React from 'react'
import { Link } from 'react-router'
import PitcherStatsContainer from '../containers/PitcherStatsContainer'
import BallsCounterContainer from '../containers/BallsCounterContainer'
import { counterDefaultVal } from '../constants/counterDefaultVal'

class Stats extends React.Component {
  constructor() {
    super()
    this.state = {
      pitcherStats: [],
      config: {
        pitchesTotal: 0,
        strikesTotal: 0,
        pitchesInn: 0,
        ballsCount: 0,
        strikesCount: 0,
        outs: 0,
        curInn: 0,
        ip: 0,
        batters: 0,
        hits: 0,
        k: 0,
        bb: 0
      }
    }
    console.log('counterDefaultVal', counterDefaultVal)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment(e, title) {
    e.preventDefault()
    let currentValue, maxValue, step
    const { strikeConfig, ballConfig } = counterDefaultVal
    if (title === 'Balls') {
      currentValue = this.state.config.ballsCount
      maxValue = ballConfig.max
      step = ballConfig.step
    } else {
      currentValue = this.state.config.strikesCount
      maxValue = strikeConfig.max
      step = strikeConfig.step
    }
    if (currentValue < maxValue) {
      const newValue = currentValue + step
      this.updateCounterState(title, newValue)
    }
  }

  decrement(e, title) {
    e.preventDefault()
    let currentValue, minValue, step
    const { strikeConfig, ballConfig } = counterDefaultVal
    if (title === 'Balls') {
      currentValue = this.state.config.ballsCount
      minValue = ballConfig.min
      step = ballConfig.step
    } else {
      currentValue = this.state.config.strikesCount
      minValue = strikeConfig.min
      step = strikeConfig.step
    }
    if (currentValue > minValue) {
      const newValue = currentValue - step
      this.updateCounterState(title, newValue)
    }
  }

  // statsUpdate() {
  //   const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];
  //   // Fetch model info from BatteryService and calculate then update state
  //   this.setState({
  //     carstats: this.calculateStats(carModels, this.state.config)
  //   })
  // }

  // componentDidMount() {
  //   this.statsUpdate();
  // }

  updateCounterState(title, newValue) {
    const config = { ...this.state.config }
    // update config state with new value
    title === 'Balls' ? config['ballsCount'] = newValue : config['strikesCount'] = newValue
    // update our state
    this.setState({ config })
    // this.setState({ config }, () => { this.statsUpdate() })
  }

  render() {
    const { config, pitcherStats } = this.state
    const {selectedGame, selectedPlayer, selectedOpponent} = this.props

    console.log('counterDefaultVal', counterDefaultVal)
    return (
      <form className='stats'>
        <div className="marquee">
          <div>
            <img src={selectedPlayer.photo} className="player-photo" />
            <div className="player-id">
              <div className="player-number">{selectedPlayer.number}</div>
              <div className="player-name">{selectedPlayer.name}</div>
              <div className="player-team">{selectedPlayer.team && selectedPlayer.team.name}</div>
            </div>
            <div className="opponent-team">{selectedOpponent.name}</div>
          </div>
        </div>
        <div className='counter'>
          <div className="input-group spinner">
            <input type="text" className="form-control" value={this.state.config.ballsCount} min="0" max="4"/>
            <div className="input-group-btn-vertical">
              <button className="btn btn-default" onClick={(e) => this.increment(e, counterDefaultVal.ballConfig.title)}
            disabled={this.state.config.ballsCount >= counterDefaultVal.ballConfig.max} type="button"><i className="glyphicon glyphicon-menu-up"></i></button>
              <button className="btn btn-default" onClick={(e) => this.decrement(e, counterDefaultVal.ballConfig.title)}
            disabled={this.state.config.ballsCount <= counterDefaultVal.ballConfig.min} type="button"><i className="glyphicon glyphicon-menu-down"></i></button>
            </div>
          </div>
          <div className="input-group spinner">
            <input type="text" className="form-control" value={this.state.config.strikesCount} min="0" max="4"/>
            <div className="input-group-btn-vertical">
              <button className="btn btn-default" onClick={(e) => this.increment(e, counterDefaultVal.strikeConfig.title)}
            disabled={this.state.config.strikesCount >= counterDefaultVal.strikeConfig.max} type="button"><i className="glyphicon glyphicon-menu-up"></i></button>
              <button className="btn btn-default" onClick={(e) => this.decrement(e, counterDefaultVal.strikeConfig.title)}
            disabled={this.state.config.strikesCount <= counterDefaultVal.strikeConfig.min} type="button"><i className="glyphicon glyphicon-menu-down"></i></button>
            </div>
            <div>{this.state.config.outs} outs</div>
            <div>{this.state.config.curInn} inning</div>
          </div>
        </div>
      </form>
    )
  }
}

export default Stats
