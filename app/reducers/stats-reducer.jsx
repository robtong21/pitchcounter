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
  switch(action.type) {
    case 'ADD_STRIKE_CALLED': {
      const newState = { ...state,
        pitcherStats: {
          strikesCalled: state.pitcherStats.strikesCalled+1,
          totalStrikes: state.pitcherStats.totalStrikes+1,
          totalPitches: state.pitcherStats.totalPitches+1,
        },
        count: {
          strikes: state.count.strikes+1
        }
      }
      console.log('newState in reducer', newState)
      return newState
      // return updateStats(state, newState)
    }
    case 'ADD_STRIKE_SWUNG': {
      const newState = { ...state,
        pitcherStats: {
          strikesSwung: state.pitcherStats.strikesSwung+1,
          totalStrikes: state.pitcherStats.totalStrikes+1,
          totalPitches: state.pitcherStats.totalPitches+1,
        },
        count: {
          strikes: state.count.strikes+1
        }
      }
      break
      // return updateStats(state, newState)
    }
    case 'ADD_STRIKE_FOUL': {
      const newState = { ...state,
        pitcherStats: {
          strikesFouled: state.pitcherStats.strikesFouled+1,
          totalStrikes: state.pitcherStats.totalStrikes+1,
          totalPitches: state.pitcherStats.totalPitches+1,
        }
      }
      break
      // return updateStats(state, newState)
    }
    case 'ADD_BALL': {
      const newState = { ...state,
        pitcherStats: {
          totalPitches: state.pitcherStats.totalPitches+1,
          balls: state.pitcherStats.balls+1,
        },
        count: {
          strikes: state.count.strikes+1
        }
      }
      break
      // return updateStats(state, newState)
    }
    case 'ADD_HIT': {
      const newState = { ...state,
        pitcherStats: {
          totalStrikes: state.pitcherStats.totalStrikes+1,
          totalPitches: state.pitcherStats.totalPitches+1,
          battersFaced: state.pitcherStats.battersFaced+1,
          hits: state.pitcherStats.hits+1,
        },
        count: {
          strikes: 0,
          balls: 0
        }
      }
      break
      // return updateStats(state, newState)
    }
    case 'ADD_OUT': {
      const newState = { ...state,
        pitcherStats: {
          totalStrikes: state.pitcherStats.totalStrikes+1,
          totalPitches: state.pitcherStats.totalPitches+1,
          battersFaced: state.pitcherStats.battersFaced+1,
          outs: state.pitcherStats.outs+1,
        },
        count: {
          strikes: 0,
          balls: 0
        }
      }
      break
      // return updateStats(state, newState)
    }
    case 'ADD_ROE': {
      const newState = { ...state,
        pitcherStats: {
          totalStrikes: state.pitcherStats.totalStrikes+1,
          totalPitches: state.pitcherStats.totalPitches+1,
          battersFaced: state.pitcherStats.battersFaced+1,
          roe: state.pitcherStats.roe+1,
        },
        count: {
          strikes: 0,
          balls: 0
        }
      }
      break
      // return updateStats(state, newState)
    }
    case 'ADD_HBP': {
      const newState = { ...state,
        pitcherStats: {
          balls: state.pitcherStats.balls+1,
          totalPitches: state.pitcherStats.totalPitches+1,
          battersFaced: state.pitcherStats.battersFaced+1,
          hbp: state.pitcherStats.hbp+1,
        },
        count: {
          strikes: 0,
          balls: 0
        }
      }
      break
      // return updateStats(state, newState)
    }
    default: return state
  }
}
