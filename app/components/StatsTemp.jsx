import React from 'react'
import { Link } from 'react-router'
import Counter from './Counter'
import PitcherStatsContainer from '../containers/PitcherStatsContainer'

class Stats extends React.Component {
  constructor() {
    super()
    this.state = {
      pitcherStats: [],
      config: {
        strikesTot: 0,
        pitches: 0,
        pitchesInn: 0,
        balls: 0,
        strikes: 0,
        outs: 0,
        currInn: 0,
        ip: 0,
        batters: 0,
        hits: 0,
        k: 0,
        bb: 0
      }
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.calculateStats = this.calculateStats.bind(this)
    this.statsUpdate = this.statsUpdate.bind(this)
    this.updateCounterState = this.updateCounterState.bind(this)
  }

  increment(e, title) {
    e.preventDefault();
    let currentValue, maxValue, step;
    const { strikes, balls } = this.props.counterDefaultVal;
    if (title === 'Balls') {
      currentValue = this.state.config.balls;
      maxValue = balls.max;
      step = balls.step;
    } else {
      currentValue = this.state.config.strikes;
      maxValue = strikes.max;
      step = strikes.step;
    }
    if (currentValue < maxValue) {
      const newValue = currentValue + step;
      this.updateCounterState(title, newValue);
    }
  }

  decrement(e, title) {
    e.preventDefault();
    let currentValue, minValue, step;
    const { strikes, balls } = this.props.counterDefaultVal;
    if (title === 'Speed') {
      currentValue = this.state.config.balls;
      minValue = balls.min;
      step = balls.step;
    } else {
      currentValue = this.state.config.strikes;
      minValue = strikes.min;
      step = strikes.step;
    }
    if (currentValue > minValue) {
      const newValue = currentValue - step;
      this.updateCounterState(title, newValue);
    }
  }

  calculateStats = (models, value) => {
    return models.map(model => {
      const { balls, strikes } = value;
      const miles = dataModels[model][wheels][climate ? 'on' : 'off'].balls[balls][strikes];
      return {
        model,
        miles
      };
    });
  }

  statsUpdate() {
    const statCategories = ['1stPK', '3rdPK', 'IP', 'Batters', 'Hits', 'K', 'BB'];
    // Fetch model info from BatteryService and calculate then update state
    this.setState({
      pitcherstats: this.calculateStats(statCategories, this.state.config)
    })
  }

  handleChangeClicker() {
    const config = {...this.state.config};
    config['climate'] = !this.state.config.climate;
    this.setState({ config }, () => {this.statsUpdate()});
  }

  componentDidMount() {
    this.statsUpdate()
  }

  updateCounterState(title, newValue) {
    const config = { ...this.state.config };
    // update config state with new value
    title === 'Balls' ? config['balls'] = newValue : config['strikes'] = newValue;
    // update our state
    this.setState({ config }, () => {this.statsUpdate()});
  }

  render() {
    const { config, pitcherStats } = this.state
    const counterDefaultVal = {
      balls: {
        title: "Balls",
        unit: "balls",
        step: 1,
        min: 0,
        max: 4
      },
      strikes: {
        title: "Strikes",
        unit: "strikes",
        step: 1,
        min: 0,
        max: 3
      }
    }
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
            {/* <div className="pitches">
              <div className="pitches-total">{stats.totalPitches}</div>
              <div className="stats-innPitches">{stats.currInnPitches}</div>
            </div> */}
          </div>
        </div>
      </form>
    )
  }
}

export default Stats
