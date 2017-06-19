import React from 'react'
import { connect } from 'react-redux'
import MainStats from '../components/MainStats'

const mapStateToProps = (state) => {
  return {
    totalPitches: state.stats.pitcherStats.totalPitches,
    totalStrikes: state.stats.pitcherStats.totalStrikes,
    balls: state.stats.count.balls,
    strikes: state.stats.count.strikes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const MainStatsContainer = connect(mapStateToProps, mapDispatchToProps)(MainStats)

export default MainStatsContainer
