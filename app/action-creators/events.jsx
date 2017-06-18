export const xC = (value) => {
  return {
    type: 'ADD_STRIKE_CALLED',
    value,
  }
}

export const xS = (value) => {
  return {
    type: 'ADD_STRIKE_SWUNG',
    value,
  }
}

export const xF = (value) => {
  return {
    type: 'ADD_STRIKE_FOULED',
    value,
  }
}

export const ball = (value) => {
  return {
    type: 'ADD_BALL',
    value,
  }
}

export const hit = (value) => {
  return {
    type: 'ADD_HIT',
    value,
  }
}

export const out = (value) => {
  return {
    type: 'ADD_OUT',
    value,
  }
}

export const roe = (value) => {
  return {
    type: 'ADD_ROE',
    value,
  }
}

export const hbp = (value) => {
  return {
    type: 'ADD_HBP',
    value,
  }
}

export const strikeCalled = gameId => {
  return dispatch => {
    axios.get(`/api/games/${gameId}`)
    .then(res => {
      dispatch(setCurrentGame(res.data))
    })
  }
}
