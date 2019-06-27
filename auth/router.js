const { Router } = require('express')
const {toJWT,toData} = require('./jwt')

const router = new Router()

// define endpoints here


router.post('/login', function (req, res) {
    console.log("post from login ", req.body)
    const username = req.body.username
    const passwd = req.body.password
    console.log("user and pass", username,passwd )
    if ((username != undefined) &&( passwd != undefined) && ( passwd != "")) {
        res.send({
            jwt: toJWT({ userId: 1 })
        })
    } else {
        res.status(400).send({
            message: 'Please supply a valid email and password'
        })
    }
})

router.get('/secret-endpoint', (req, res) => {
    console.log('got here')
    const auth = req.headers.authorization && req.headers.authorization.split(' ')
    if (auth && auth[0] === 'Bearer' && auth[1]) {
      try {
        const data = toData(auth[1])
        res.send({
          message: 'Thanks for visiting the secret endpoint.',
          data
        })
      }
      catch(error) {
        res.status(400).send({
          message: `Error ${error.name}: ${error.message}`,
        })
      }
    }
    else {
      res.status(401).send({
        message: 'Please supply some valid credentials'
      })
    }
  })




//   res.send({
//     jwt: toJWT({ userId: 1 })
//   })

module.exports = router