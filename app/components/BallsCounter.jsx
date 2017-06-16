import React from 'react'

const BallCounter = (props) => (
  <div className="counter">
    <p className="counter__title">{props.initValues.title}</p>
    <div className="counter__container cf">
      <div className="counter__item">
        <p className="counter__number">
          { props.currentValue }
          <span>{ props.initValues.unit }</span>
        </p>
        <div className="counter__controls">
          <button
            onClick={(e) => props.increment(e, props.initValues.title)}
            disabled={props.currentValue >= props.initValues.max}
          >
          </button>
          <button
            onClick={(e) => props.decrement(e, props.initValues.title)}
            disabled={props.currentValue <= props.initValues.min}
          >
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default BallCounter
