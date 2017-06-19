export const initialState = {
  pitcherStats: {
    battersFaced: 0,
    totalPitches: 0,
    totalStrikes: 0,
    strikesCalled: 0,
    strikesSwung: 0,
    strikesFouled: 0,
    firstPitchStrikes: 0,
    thirdPitchStrikes: 0,
    firstPitchStrikesOpp: 0,
    thirdPitchStrikesOpp: 0,
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

export default function(state=initialState, action) {
  const newState = { ...state }
  switch (action.type) {
    case 'ADD_STRIKE_CALLED': {
      if (state.count.strikes + state.count.balls === 0) {
        newState.pitcherStats.firstPitchStrikes = state.pitcherStats.firstPitchStrikes+1
        newState.pitcherStats.firstPitchStrikesOpp = state.pitcherStats.firstPitchStrikesOpp+1
      }
      if (state.count.strikes + state.count.balls === 2) {
        newState.pitcherStats.thirdPitchStrikes = state.pitcherStats.thirdPitchStrikes+1
        newState.pitcherStats.thirdPitchStrikesOpp = state.pitcherStats.thirdPitchStrikesOpp+1
      }
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
    case 'UNDO_STRIKE_CALLED': {
      if (state.count.strikes === 1 && state.count.balls === 0) {
        newState.pitcherStats.firstPitchStrikes = state.pitcherStats.firstPitchStrikes-1
        newState.pitcherStats.firstPitchStrikesOpp = state.pitcherStats.firstPitchStrikesOpp-1
      }
      if (state.count.strikes + state.count.balls === 2) {
        newState.pitcherStats.thirdPitchStrikes = state.pitcherStats.thirdPitchStrikes-1
        newState.pitcherStats.thirdPitchStrikesOpp = state.pitcherStats.thirdPitchStrikesOpp-1
      }
      if (newState.count.strikes === 0 && newState.count.balls === 0) {
        newState.count.strikes = 2
        newState.count.balls = state.count.balls
        newState.pitcherStats.K = state.pitcherStats.K-1
        newState.pitcherStats.battersFaced = state.pitcherStats.battersFaced-1
        newState.pitcherStats.outs = state.pitcherStats.outs-1
        if (newState.pitcherStats.IP % 1 === 0) {
          newState.pitcherStats.IP = newState.pitcherStats.IP-0.8
        } else {
          newState.pitcherStats.IP = state.pitcherStats.IP-0.1
        }
      }
      newState.pitcherStats.strikesCalled = state.pitcherStats.strikesCalled-1
      newState.pitcherStats.totalStrikes = state.pitcherStats.totalStrikes-1
      newState.pitcherStats.totalPitches = state.pitcherStats.totalPitches-1
      newState.count.strikes = state.count.strikes-1
      return newState
    }
    case 'ADD_STRIKE_SWUNG': {
      if (state.count.strikes + state.count.balls === 0) {
        newState.pitcherStats.firstPitchStrikes = state.pitcherStats.firstPitchStrikes+1
        newState.pitcherStats.firstPitchStrikesOpp = state.pitcherStats.firstPitchStrikesOpp+1
      }
      if (state.count.strikes + state.count.balls === 2) {
        newState.pitcherStats.thirdPitchStrikes = state.pitcherStats.thirdPitchStrikes+1
        newState.pitcherStats.thirdPitchStrikesOpp = state.pitcherStats.thirdPitchStrikesOpp+1
      }
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
      if (state.count.strikes + state.count.balls === 0) {
        newState.pitcherStats.firstPitchStrikes = state.pitcherStats.firstPitchStrikes+1
        newState.pitcherStats.firstPitchStrikesOpp = state.pitcherStats.firstPitchStrikesOpp+1
      }
      if (state.count.strikes + state.count.balls === 2) {
        newState.pitcherStats.thirdPitchStrikes = state.pitcherStats.thirdPitchStrikes+1
        newState.pitcherStats.thirdPitchStrikesOpp = state.pitcherStats.thirdPitchStrikesOpp+1
      }
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
      if (state.count.strikes + state.count.balls === 0) {
        newState.pitcherStats.firstPitchStrikes = state.pitcherStats.firstPitchStrikes+1
        newState.pitcherStats.firstPitchStrikesOpp = state.pitcherStats.firstPitchStrikesOpp+1
      }
      if (state.count.strikes + state.count.balls === 2) {
        newState.pitcherStats.thirdPitchStrikes = state.pitcherStats.thirdPitchStrikes+1
        newState.pitcherStats.thirdPitchStrikesOpp = state.pitcherStats.thirdPitchStrikesOpp+1
      }
      newState.pitcherStats.totalStrikes = state.pitcherStats.totalStrikes+1
      newState.pitcherStats.totalPitches = state.pitcherStats.totalPitches+1
      newState.pitcherStats.battersFaced = state.pitcherStats.battersFaced+1
      newState.pitcherStats.hits = state.pitcherStats.hits+1
      newState.count.strikes = 0
      newState.count.balls = 0
      return newState
    }
    case 'ADD_OUT': {
      if (state.count.strikes + state.count.balls === 0) {
        newState.pitcherStats.firstPitchStrikes = state.pitcherStats.firstPitchStrikes+1
        newState.pitcherStats.firstPitchStrikesOpp = state.pitcherStats.firstPitchStrikesOpp+1
      }
      if (state.count.strikes + state.count.balls === 2) {
        newState.pitcherStats.thirdPitchStrikes = state.pitcherStats.thirdPitchStrikes+1
        newState.pitcherStats.thirdPitchStrikesOpp = state.pitcherStats.thirdPitchStrikesOpp+1
      }
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
      if (state.count.strikes + state.count.balls === 0) {
        newState.pitcherStats.firstPitchStrikes = state.pitcherStats.firstPitchStrikes+1
        newState.pitcherStats.firstPitchStrikesOpp = state.pitcherStats.firstPitchStrikesOpp+1
      }
      if (state.count.strikes + state.count.balls === 2) {
        newState.pitcherStats.thirdPitchStrikes = state.pitcherStats.thirdPitchStrikes+1
        newState.pitcherStats.thirdPitchStrikesOpp = state.pitcherStats.thirdPitchStrikesOpp+1
      }
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
