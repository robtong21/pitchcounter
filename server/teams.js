'use strict'

const db = require('APP/db')
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
      Team.findAll()
        .then(teams => {
          // console.log('teams in Teams', teams)
          res.json(teams)
        })
        .catch(next))
  .post('/',
    (req, res, next) =>
      Team.create(req.body)
      .then(team => res.status(201).json(team))
      .catch(next))
  .get('/:id',
    // mustBeLoggedIn,
    (req, res, next) =>
      Team.findById(req.params.id)
      .then(team => res.json(team))
      .catch(next))
