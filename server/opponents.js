'use strict'

const db = require('APP/db')
const Team = db.model('teams')
const Opponent = db.model('opponents')

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
      Opponent.findAll({
        include: [Team]
      })
        .then(opponents => {
          // console.log('opponents in Opponents', opponents)
          res.json(opponents)
        })
        .catch(next))
  .post('/',
    (req, res, next) =>
      Opponent.create(req.body)
      .then(opponent => res.status(201).json(opponent))
      .catch(next))
  .get('/:id',
    // mustBeLoggedIn,
    (req, res, next) =>
      Opponent.findById(req.params.id)
      .then(opponent => res.json(opponent))
      .catch(next))
