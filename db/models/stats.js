'use strict'

const {STRING, INTEGER} = require('sequelize')

module.exports = db => db.define('stats', {
  battersFaced: INTEGER,
  totalPitches: INTEGER,
  totalStrikes: INTEGER,
  strikesCalled: INTEGER,
  strikesSwung: INTEGER,
  strikesFouled: INTEGER,
  firstPitchStrikes: INTEGER,
  thirdPitchStrikes: INTEGER,
  firstPitchStrikesOpp: INTEGER,
  thirdPitchStrikesOpp: INTEGER,
  balls: INTEGER,
  K: INTEGER,
  BB: INTEGER,
  hits: INTEGER,
  outs: INTEGER,
  HBP: INTEGER,
  ROE: INTEGER,
  IP: INTEGER,
})

module.exports.associations = (Stats, {Game, User}) => {
  Stats.belongsTo(Game)
  Stats.belongsTo(User)
}
