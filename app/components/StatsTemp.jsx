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
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.resetBallsStrikesCount = this.resetBallsStrikesCount.bind(this)
    this.resetOuts = this.resetOuts.bind(this)
    this.addPitch = this.addPitch.bind(this)
    this.addStrike = this.addStrike.bind(this)
    this.addBB = this.addBB.bind(this)
    this.addK = this.addK.bind(this)
    this.addOut = this.addOut.bind(this)
    this.addCurInn = this.addCurInn.bind(this)
    this.checkifBBorK = this.checkifBBorK.bind(this)
  }

  addBB() {
    const config = { ...this.state.config }
    let newBB = this.state.config.bb + 1
    console.log('newBB', newBB)
    config['bb'] = newBB
    this.setState({ config })
    console.log('this.state.config after addBB', config)
  }

  addK() {
    const config = { ...this.state.config }
    let newK = this.state.config.k + 1
    config.k = newK
    this.setState({ config })
  }

  addOut() {
    const config = { ...this.state.config }
    let newOuts = this.state.config.outs + 1
    let newIP = this.state.config.ip + 0.1
    let newPitchesInn = 0
    let newStrikesInn = 0
    config.outs = newOuts
    if (newIP % 1 >= 0.25) Math.ceil(newIP)
    if (newOuts >= 3) {
      this.resetBallsStrikesCount()
      this.resetOuts()
      this.addCurInn()
      config['pitchesInn'] = newPitchesInn
      config['strikesInn'] = newStrikesInn
    }
    config.ip = newIP
    this.setState({ config })
    console.log('this.state.config after addOut', config)
  }

  addCurInn() {
    const config = { ...this.state.config }
    let newCurInn = this.state.config.curInn + 1
    config.curInn = newCurInn
    this.setState({ config })
  }

  resetBallsStrikesCount() {
    const config = { ...this.state.config }
    console.log('config at beg of resetBallsStrikes', config)
    const newBallsCount = 0
    const newStrikesCount = 0
    config['ballsCount'] = newBallsCount
    config['strikesCount'] = newStrikesCount
    console.log('newBallsCount', newBallsCount)
    console.log('newStrikesCount', newStrikesCount)
    this.setState({ config })
    console.log('this.state.config after resetBallsStrikesCount', config)
  }

  checkifBBorK() {

  }

  resetOuts() {
    const config = { ...this.state.config }
    let newOuts = 0
    config.outs = newOuts
    this.setState({ config })
  }

  addPitch() {
    const config = { ...this.state.config }
    const newPitchesTotal = this.state.config.pitchesTotal + 1
    const newPitchesInn = this.state.config.pitchesInn + 1
    config.pitchesTotal = newPitchesTotal
    config.pitchesInn = newPitchesInn
    this.setState({ config })
  }

  addStrike() {
    const config = { ...this.state.config }
    const newStrikesTotal = this.state.config.strikesTotal + 1
    const newStrikesInn = this.state.config.strikesInn + 1
    config.strikesTotal = newStrikesTotal
    config.strikesInn = newStrikesInn
    this.setState({ config })
  }

  increment(e, title) {
    e.preventDefault()
    let currentValue, maxValue, step
    const config = { ...this.state.config }
    const { strikeConfig, ballConfig } = counterDefaultVal
    let newValue
    if (title === 'Balls') {
      currentValue = this.state.config.ballsCount
      maxValue = ballConfig.max
    } else {
      currentValue = this.state.config.strikesCount
      maxValue = strikeConfig.max
    }
    if (currentValue < maxValue) {
      newValue = currentValue + 1
      console.log('newValue', newValue)
      title === 'Balls' ? config['ballsCount'] = newValue : config['strikesCount'] = newValue
      config['pitchesTotal'] = newValue
      config['pitchesInn'] = newValue
      title === 'Strikes' ? config['strikesTotal'] = newValue : null
      title === 'Strikes' ? config['strikesInn'] = newValue : null
      this.setState({ config })
      console.log('config in increment', config)
      if (title === 'Balls' && newValue.ballsCount >= 4) {
        console.log('here!!!!!!!!!')
        this.resetBallsStrikesCount()
        this.addBB()
        console.log('this.state.config after BB', config)
      } else if (title === 'Strikes' && newValue >= 3) {
        this.resetBallsStrikesCount()
        this.addK()
        console.log('this.state.config after K', config)
      }
    }
  }

  decrement(e, title) {
    e.preventDefault()
    let currentValue, minValue, step
    const config = { ...this.state.config }
    const { strikeConfig, ballConfig } = counterDefaultVal
    let newValue
    if (title === 'Balls') {
      currentValue = this.state.config.ballsCount
      minValue = ballConfig.min
    } else {
      currentValue = this.state.config.strikesCount
      minValue = strikeConfig.min
    }
    if (currentValue > minValue) {
      newValue = currentValue - 1
      title === 'Balls' ? config['ballsCount'] = newValue : config['strikesCount'] = newValue
      config['pitchesTotal'] = newValue
      config['pitchesInn'] = newValue
      title === 'Strikes' ? config['strikesTotal'] = newValue : null
      title === 'Strikes' ? config['strikesInn'] = newValue : null
      this.setState({ config })
    }
  }

  // calculateStats = (models, value) => {
  //   return models.map(model => {
  //     // ES6 Object destructuring Syntax,
  //     // takes out required values and create references to them
  //     const { speed, temperature, climate, wheels } = value;
  //     const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
  //     return {
  //       model,
  //       miles
  //     };
  //   });
  // }

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

  render() {
    const { config, pitcherStats } = this.state
    const {selectedGame, selectedPlayer, selectedOpponent} = this.props

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
