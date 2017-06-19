import React from 'react'
import { Link } from 'react-router'
import MarqueeContainer from '../containers/MarqueeContainer'
import MainStatsContainer from '../containers/MainStatsContainer'
import ControlsContainer from '../containers/ControlsContainer'
import CountContainer from '../containers/CountContainer'
import StatsContainer from '../containers/StatsContainer'

const View = (props) => {
  return (
    <div>
      <MarqueeContainer />
      <MainStatsContainer />
      <ControlsContainer />
      <StatsContainer />
    </div>
  )
}

export default View
