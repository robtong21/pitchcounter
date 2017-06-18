import React from 'react'

const Count = (props) => (
  <div className="tesla-counter">
    <h1>Balls</h1>
    <div className="tesla-counter__container cf">
      <div className="tesla-counter__item">
        <p className="tesla-counter__number">
          { props.ballCount }
          <span> balls</span>
        </p>
      </div>
      <div className="tesla-counter__item">
        <p className="tesla-counter__number">
          { props.strikeCount }
          <span> strikes</span>
        </p>
      </div>
    </div>
  </div>
)

export default Count
