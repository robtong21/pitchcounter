import { connect } from 'react-redux'
import BallsCounter from '../components/BallsCounter'
import counterDefaultVal from '../constants/counterDefaultVal'
import { ballUp, ballDown } from '../action-creators/pitches'

const mapStateToProps = (state) => {
  return {
    currentValue: state.config.balls,
    initValues: counterDefaultVal.balls
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
      dispatch(ballUp(value))
    },
    decrement: (value) => {
      dispatch(ballDown(value))
    }
  }
}

const BallsCounterContainer = connect(mapStateToProps, mapDispatchToProps)(BallsCounter)

export default BallsCounterContainer
