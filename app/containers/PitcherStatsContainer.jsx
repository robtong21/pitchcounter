import { connect } from 'react-redux'
import PitcherStats from '../components/PitcherStats'

const mapStateToProps = (state) => {
  return {
    carstats: state.carstats
  }
}

const PitcherStatsContainer = connect(mapStateToProps, null)(PitcherStats)

export default PitcherStatsContainer
