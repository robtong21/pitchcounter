'use strict'

const {STRING, DATE, TIME} = require('sequelize')

module.exports = db => db.define('games', {
  date: DATE,
  time: STRING,
  location: STRING,
})

module.exports.associations = (Game, {Team}) => {
  Game.belongsTo(Team)
}
