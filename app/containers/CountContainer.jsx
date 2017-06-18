import React from 'react'
import { connect } from 'react-redux'
import Count from '../components/Count'

const mapStateToProps = (state) => {
  console.log('state in CountContainer', state)
  return {
    // ballCount: state.count.balls,
    // strikeCount: state.count.strikes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Count)

export default CountContainer
