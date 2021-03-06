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
router.get('/team/:id', function (req, res, next) {
    console.log("this one is called", req.params.id)
    team.findByPk(req.params.id)
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

router.put('/team/:id', function (req, res) {
    const id = req.params.id
    console.log("id", id)
    console.log("id2", req.body.name)
    team.findByPk(req.params.id)
        .then(id => {
            console.log("id is 41", id.dataValues)

            id.update({
                name: req.body.name
            })
            return id.dataValues

        })

        .then(mess => res.status(201).json(mess))
        .catch(err => console.log("err not found?", err))



})

router.post('/team', function (req, res) {
    console.log("post ", req.body)
    team
        .create(req.body)
        .then(team => res.status(201).json(team))
        .catch(err => console.log("got an error", err))
})

module.exports = router;