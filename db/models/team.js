'use strict'

const {STRING, INTEGER, TEXT} = require('sequelize')

module.exports = db => db.define('teams', {
  name: STRING,
  year: INTEGER,
  logo: TEXT,
})

module.exports.associations = (Team, {User}) => {
  Team.hasMany(User)
}
