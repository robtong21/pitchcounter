'use strict'

const {STRING, INTEGER} = require('sequelize')

module.exports = db => db.define('stats', {
  totalPitches: INTEGER,
  inn1Pitches: INTEGER,
  inn2Pitches: INTEGER,
  inn3Pitches: INTEGER,
  inn4Pitches: INTEGER,
  inn5Pitches: INTEGER,
  inn6Pitches: INTEGER,
  inn7Pitches: INTEGER,
  inn1Strikes: INTEGER,
  inn2Strikes: INTEGER,
  inn3Strikes: INTEGER,
  inn4Strikes: INTEGER,
  inn5Strikes: INTEGER,
  inn6Strikes: INTEGER,
  inn7Strikes: INTEGER,
  firstPitchStrikes: INTEGER,
  thirdPitchStrikes: INTEGER,
  inningsPitched: INTEGER,
  hitsAllowed: INTEGER,
  reachedOnError: INTEGER,
  strikeouts: INTEGER,
  walks: INTEGER,
  hitByPitch: INTEGER,
})

module.exports.associations = (Stats, {Game, User}) => {
  Stats.belongsTo(Game)
  Stats.belongsTo(User)
}
