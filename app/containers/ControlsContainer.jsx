import React from 'react'
import { connect } from 'react-redux'
import Controls from '../Components/Controls'
import { addStrikeCalled, undoStrikeCalled, addStrikeSwung, addStrikeFouled, addBall, addHit, addOut, addRoe, addHbp, updateStats } from '../action-creators/stats'

const mapStateToProps = (state) => {
  return {
    game: state.games.selected,
    pitcher: state.players.pitcher,
    stats: state.stats.pitcherStats,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    strikeCalled: (e, pitcher, game) => {
      dispatch(addStrikeCalled(pitcher, game))
    },
    strikeSwung: (e, pitcher, game) => {
      dispatch(addStrikeSwung(pitcher, game))
    },
    strikeFouled: (e, pitcher, game) => {
      dispatch(addStrikeFouled(pitcher, game))
    },
    ball: (e, pitcher, game) => {
      dispatch(addBall(pitcher, game))
    },
    hit: (e, pitcher, game) => {
      dispatch(addHit(pitcher, game))
    },
    out: (e, pitcher, game) => {
      dispatch(addOut(pitcher, game))
    },
    roe: (e, pitcher, game) => {
      dispatch(addRoe(pitcher, game))
    },
    hbp: (e, pitcher, game) => {
      dispatch(addHbp(pitcher, game))
    },
    changePitcher: (e, stats, pitcherId, gameId) => {
      dispatch(updateStats(stats, pitcherId, gameId))
    },
    undoStrikeCalled: (e, pitcher, game) => {
      dispatch(undoStrikeCalled(pitcher, game))
    },

  }
}

const ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(Controls)

export default ControlsContainer
