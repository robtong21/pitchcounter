import React from 'react'
import { connect } from 'react-redux'
import Count from '../components/Count'

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    ballCount: state.stats.count.balls,
    strikeCount: state.stats.count.strikes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Count)

export default CountContainer
