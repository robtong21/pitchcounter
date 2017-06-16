import React from 'react'
import { Link } from 'react-router'
import Marquee from './Marquee'

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
  // const stats = props.stats
  const game = props.selectedGame
  const player = props.selectedPlayer
  const opponent = props.selectedOpponent
  console.log('game', game)
  console.log('player', player)
  console.log('opponent', opponent)
  console.log('props', props.pitcher)

  increment(e, title) {
    e.preventDefault();
    let currentValue, maxValue, step;
    const { speed, temperature } = this.props.counterDefaultVal;
    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      maxValue = speed.max;
      step = speed.step;
    } else {
      currentValue = this.state.config.temperature;
      maxValue = temperature.max;
      step = temperature.step;
    }
    if (currentValue < maxValue) {
      const newValue = currentValue + step;
      this.updateCounterState(title, newValue);
    }
  }

  decrement(e, title) {
    e.preventDefault();
    let currentValue, minValue, step;
    const { speed, temperature } = this.props.counterDefaultVal;
    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      minValue = speed.min;
      step = speed.step;
    } else {
      currentValue = this.state.config.temperature;
      minValue = temperature.min;
      step = temperature.step;
    }
    if (currentValue > minValue) {
      const newValue = currentValue - step;
      this.updateCounterState(title, newValue);
    }
  }

  calculateStats = (models, value) => {
    const dataModels = getModelData();
    return models.map(model => {
      const { speed, temperature, climate, wheels } = value;
      const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
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
      carstats: this.calculateStats(carModels, this.state.config)
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
    title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue;
    // update our state
    this.setState({ config }, () => {this.statsUpdate()});
  }

  render() {
    const { config, pitcherStats } = this.state
    return (
      <div className="marquee">
        <Marquee />
        <div className='controls'>
          <button
              onClick={(e) => props.increment(e, props.initValues.title)}
              disabled={props.currentValue >= props.initValues.max}
            >
            </button>
            <button
              onClick={(e) => props.decrement(e, props.initValues.title)}
              disabled={props.currentValue <= props.initValues.min}
            >
            </button>
        </div>
      </div>
    )
  }
}

export default Stats
