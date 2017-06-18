export const initialState = {
  pitcherStats: {
    battersFaced: 0,
    totalPitches: 0,
    totalStrikes: 0,
    strikesCalled: 0,
    strikesSwung: 0,
    strikesFouled: 0,
    balls: 0,
    K: 0,
    BB: 0,
    hits: 0,
    outs: 0,
    HBP: 0,
    ROE: 0,
    IP: 0,
  },
  count: {
    strikes: 0,
    balls: 0
  }
}

// function updateStats(state, newState) {
//   return {
//     ...state,
//     pitcherStats: calculateStats(newState)
//   }
// }

// function calculateStats(state) {
//   const models = ['60', '60D', '75', '75D', '90D', 'P100D']
//   const dataModels = getModelData()
//   return models.map(model => {
//     const { speed, temperature, climate, wheels } = state.pitcherStats;
//     const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature]
//     return { model, miles }
//   })
// }

export default function (state=initialState, action) {
  const newState = { ...state }
  switch(action.type) {
    case 'ADD_STRIKE_CALLED': {
      newState.pitcherStats.strikesCalled = state.pitcherStats.strikesCalled+1
      newState.pitcherStats.totalStrikes = state.pitcherStats.totalStrikes+1
      newState.pitcherStats.totalPitches = state.pitcherStats.totalPitches+1
      newState.count.strikes = state.count.strikes+1
      if (newState.count.strikes === 3) {
        newState.count.strikes = 0
        newState.count.balls = 0
        newState.pitcherStats.K = state.pitcherStats.K+1
        newState.pitcherStats.battersFaced = state.pitcherStats.battersFaced+1
        newState.pitcherStats.outs = state.pitcherStats.outs+1
        newState.pitcherStats.IP = state.pitcherStats.IP+0.1
        if (newState.pitcherStats.IP % 1 > 0.25) {
          Math.ceil(newState.pitcherStats.IP)
        }
      }
      return newState
    }
    case 'ADD_STRIKE_SWUNG': {
      newState.pitcherStats.strikesSwung = state.pitcherStats.strikesSwung+1
      newState.pitcherStats.totalStrikes = state.pitcherStats.totalStrikes+1
      newState.pitcherStats.totalPitches = state.pitcherStats.totalPitches+1
      newState.count.strikes = state.count.strikes+1
      if (newState.count.strikes === 3) {
        newState.count.strikes = 0
        newState.count.balls = 0
        newState.pitcherStats.K = state.pitcherStats.K+1
        newState.pitcherStats.battersFaced = state.pitcherStats.battersFaced+1
        newState.pitcherStats.outs = state.pitcherStats.outs+1
        newState.pitcherStats.IP = state.pitcherStats.IP+0.1
        if (newState.pitcherStats.IP % 1 > 0.25) {
          Math.ceil(newState.pitcherStats.IP)
        }
      }
      return newState
    }
    case 'ADD_STRIKE_FOULED': {
      newState.pitcherStats.strikesFouled = state.pitcherStats.strikesFouled+1
      newState.pitcherStats.totalStrikes = state.pitcherStats.totalStrikes+1
      newState.pitcherStats.totalPitches = state.pitcherStats.totalPitches+1
      if (newState.count.strikes < 2) newState.count.strikes = state.count.strikes+1
      return newState
    }
    case 'ADD_BALL': {
      newState.pitcherStats.totalPitches = state.pitcherStats.totalPitches+1
      newState.pitcherStats.balls = state.pitcherStats.balls+1
      newState.count.balls = state.count.balls+1
      if (newState.count.balls === 4) {
        newState.count.strikes = 0
        newState.count.balls = 0
        newState.pitcherStats.BB = state.pitcherStats.BB+1
        newState.pitcherStats.battersFaced = state.pitcherStats.battersFaced+1
      }
      return newState
    }
    case 'ADD_HIT': {
      newState.pitcherStats.totalStrikes = state.pitcherStats.totalStrikes+1
      newState.pitcherStats.totalPitches = state.pitcherStats.totalPitches+1
      newState.pitcherStats.battersFaced = state.pitcherStats.battersFaced+1
      newState.pitcherStats.hits = state.pitcherStats.hits+1
      newState.count.strikes = 0
      newState.count.balls = 0
      return newState
      // return updateStats(state, newState)
    }
    case 'ADD_OUT': {
      newState.pitcherStats.totalStrikes = state.pitcherStats.totalStrikes+1
      newState.pitcherStats.totalPitches = state.pitcherStats.totalPitches+1
      newState.pitcherStats.battersFaced = state.pitcherStats.battersFaced+1
      newState.pitcherStats.outs = state.pitcherStats.outs+1
      newState.count.strikes = 0
      newState.count.balls = 0
      newState.pitcherStats.IP = state.pitcherStats.IP+0.1
      if (newState.pitcherStats.IP % 1 > 0.25) {
        newState.pitcherStats.IP = Math.ceil(newState.pitcherStats.IP)
      }
      return newState
    }
    case 'ADD_ROE': {
      newState.pitcherStats.totalStrikes = state.pitcherStats.totalStrikes+1
      newState.pitcherStats.totalPitches = state.pitcherStats.totalPitches+1
      newState.pitcherStats.battersFaced = state.pitcherStats.battersFaced+1
      newState.pitcherStats.ROE = state.pitcherStats.ROE+1
      newState.count.strikes = 0
      newState.count.balls = 0
      return newState
    }
    case 'ADD_HBP': {
      newState.pitcherStats.balls = state.pitcherStats.balls+1
      newState.pitcherStats.totalPitches = state.pitcherStats.totalPitches+1
      newState.pitcherStats.battersFaced = state.pitcherStats.battersFaced+1
      newState.pitcherStats.HBP = state.pitcherStats.HBP+1
      newState.count.strikes = 0
      newState.count.balls = 0
      return newState
    }
    default: return state
  }
}
