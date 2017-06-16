'use strict'

const {STRING, INTEGER, TEXT} = require('sequelize')

module.exports = db => db.define('opponents', {
  name: STRING,
  number: INTEGER,
})

module.exports.associations = (Opponent, {Team}) => {
  Opponent.belongsTo(Team)
}
