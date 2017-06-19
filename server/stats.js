'use strict'

const db = require('APP/db')
const Stats = db.model('stats')

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
      Stats.findAll()
        .then(stats => {
          // console.log('stats in stats', stats)
          res.json(stats)
        })
        .catch(next))
  .post('/',
    (req, res, next) =>
      Stats.create(req.body)
      .then(stats => res.status(201).json(stats))
      .catch(next))
  .get('/:id',
    // mustBeLoggedIn,
    (req, res, next) =>
      Stats.findById(req.params.id)
      .then(stat => res.json(stat))
      .catch(next))
