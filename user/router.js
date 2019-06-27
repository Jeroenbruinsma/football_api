const express = require('express')
const user = require('./model')
var router = express.Router();
const bcrypt = require('bcrypt')


router.post('/user', function (req, res) {
    console.log("post ", req.body)
    const newUser = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }
    user
        .create(newUser)
        .then(user => res.status(201).json(user))
        .catch(err => console.log("got an error", err))
})

module.exports = router;