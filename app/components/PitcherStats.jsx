import React from 'react';

const PitcherStats = (props) => {
  const listItems = props.pitcherStats.map((stat) => (
    <li key={stat.model}>
      <div></div>
      <p>{stat.miles}</p>
    </li>
  ));
  return (
    <div className="tesla-stats">
    <ul>
      {listItems}
    </ul>
  </div>
  )
};

export default PitcherStats;
