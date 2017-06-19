import React from 'react'
import { connect } from 'react-redux'
import Stats from '../components/Stats'
import { ballUp, ballDown } from '../action-creators/pitches'

const mapStateToProps = (state) => {
  return {
    battersFaced: state.stats.pitcherStats.battersFaced,
    totalPitches: state.stats.pitcherStats.totalPitches,
    totalStrikes: state.stats.pitcherStats.totalStrikes,
    strikesCalled: state.stats.pitcherStats.strikesCalled,
    strikesSwung: state.stats.pitcherStats.strikesSwung,
    strikesFouled: state.stats.pitcherStats.strikesFouled,
    firstPitchStrikes: state.stats.pitcherStats.firstPitchStrikes,
    thirdPitchStrikes: state.stats.pitcherStats.thirdPitchStrikes,
    firstPitchStrikesOpp: state.stats.pitcherStats.firstPitchStrikesOpp,
    thirdPitchStrikesOpp: state.stats.pitcherStats.thirdPitchStrikesOpp,
    balls: state.stats.pitcherStats.balls,
    K: state.stats.pitcherStats.K,
    BB: state.stats.pitcherStats.BB,
    hits: state.stats.pitcherStats.hits,
    outs: state.stats.pitcherStats.outs,
    HBP: state.stats.pitcherStats.HBP,
    ROE: state.stats.pitcherStats.ROE,
    IP: state.stats.pitcherStats.IP,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const StatsContainer = connect(mapStateToProps, mapDispatchToProps)(Stats)

export default StatsContainer
