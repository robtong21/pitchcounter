'use strict'

const db = require('APP/db')
const Game = db.model('games')
const Team = db.model('teams')

// const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
  .get('/',
    // The forbidden middleware will fail *all* requests to list users.
    // Remove it if you want to allow anyone to list all users on the site.
    //
    // If you want to only let admins list all the users, then you'll
    // have to add a role column to the users table to support
    // the concept of admin users.
    // forbidden('listing users is not allowed'),
    (req, res, next) =>
      Game.findAll({
        include: [ Team ]
      })
        .then(games => {
          console.log('games in server/games.js', games)
          res.json(games)
        })
        .catch(next))
  .post('/',
    (req, res, next) =>
      Game.create(req.body)
      .then(game => res.status(201).json(game))
      .catch(next))
  .get('/:id',
    // mustBeLoggedIn,
    (req, res, next) =>
      Game.findOne({
        where: {id: req.params.id},
        include: [ Team ]})
      .then(game => res.json(game))
      .catch(next))
