const express = require('express')
const Player = require('./model')
var router = express.Router();
const Team = require('../team/model')

router.get('/player', function (req, res, next) {
    Player.findAll()
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


router.get('/player/:id', function (req, res, next) {
    console.log("get specific player", req.params.id)
    Player.findByPk(req.params.id, { include: [Team] })
        .then(player => {
            res.json({ player: player })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Id not found',
                error: err
            })
        })
})

router.put('/player/:id', function (req, res) {
    const id = req.params.id
    console.log("id", id)
    console.log("id2", req.body.name)
    console.log("id2 number", req.body.number)
    Player.findByPk(req.params.id)
        .then(id => {
            console.log("id is 41", id.dataValues)
            id.update({
                name: req.body.name,
                number: req.body.number
            })
            return id.dataValues

        })
        .then(mess => res.status(201).json(mess))
        .catch(err => console.log("err not found?", err))
})


router.post('/player', function (req, res) {
    console.log("post ", req.body)
    Player
        .create(req.body)
        .then(team => res.status(201).json(team))
        .catch(err => console.log("got an error", err))
})


module.exports = router