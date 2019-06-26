//import router  from 'express'
const express = require('express')
const team = require('./model')
var router = express.Router();


//const router =  new router;

router.get('/team', function (req, res, next) {
    team.findAll()
    .then(team => {
      res.json({ team: team })
    })
    .catch(err => {
      res.status(500).json({
        message: 'Something went wrong',
        error: err
      })
    })
})
router.post('/team', function (req, res) {
    console.log("post ",req.bod)
    team
      .create(req.body)
      .then(team => res.status(201).json(team))
  })

module.exports = router;