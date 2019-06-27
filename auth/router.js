const { Router } = require('express')
const {toJWT,toData} = require('./jwt')
const User = require('../user/model')
const bcrypt = require('bcrypt')
const router = new Router()
const auth = require('./middleware')

// define endpoints here


// router.post('/login', function (req, res) {
//     console.log("post from login ", req.body)
//     const username = req.body.email
//     const passwd = req.body.password
//     console.log("user and pass", username,passwd )
//     if ((username != undefined) &&( passwd != undefined) && ( passwd != "")) {
//       User
//       .findOne({
//         where: {
//           email: req.body.email
//         }
//       })
//       .then(entity => {
//         if (!entity) {
//           res.status(400).send({
//             message: 'User with that email does not exist'
//           })
//         }
    
//         // 2. use bcrypt.compareSync to check the password against the stored hash
//         if (bcrypt.compareSync(req.body.password, entity.password)) {
    
//           // 3. if the password is correct, return a JWT with the userId of the user (user.id)
//           res.send({
//             jwt: toJWT({ userId: entity.id })
//           })
//         }
//         else {
//           res.status(400).send({
//             message: 'Password was incorrect'
//           })
//         }
//       })
//       .catch(err => {
//         console.error(err)
//         res.status(500).send({
//           message: 'Something went wrong'
//         })
//       })
//     } else {
//         res.status(400).send({
//             message: 'Please supply a valid email and password'
//         })
//     }
// })

router.get('/secret-endpoint', auth, (req, res) => {
  console.log("rec",req)
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.user.email}.`,
  })
})

//User.email

//   res.send({
//     jwt: toJWT({ userId: 1 })
//   })

module.exports = router