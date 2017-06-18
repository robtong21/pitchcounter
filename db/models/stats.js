'use strict'

const {STRING, INTEGER} = require('sequelize')

module.exports = db => db.define('stats', {
  battersFaced: INTEGER,
  totalPitches: INTEGER,
  totalStrikes: INTEGER,
  strikesCalled: INTEGER,
  strikesSwung: INTEGER,
  strikesFouled: INTEGER,
  balls: INTEGER,
  K: INTEGER,
  BB: INTEGER,
  hits: INTEGER,
  outs: INTEGER,
  HBP: INTEGER,
  ROE: INTEGER,
  IP: INTEGER,
  firstPitchStrikes: INTEGER,
  thirdPitchStrikes: INTEGER,
})

module.exports.associations = (Stats, {Game, User}) => {
  Stats.belongsTo(Game)
  Stats.belongsTo(User)
}
