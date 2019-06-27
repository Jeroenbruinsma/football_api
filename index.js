const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()
let port;
require("./db.js")
require('./team/model')
require('./player/model')
const teamRouter = require('./team/router')
const playerRouter = require('./player/router')
const auth = require('./auth/router')
const login = require('./user/router')


if(!process.env.PORT){
     port = 40004
}else{
     port = process.env.PORT
}
    

console.log("running football api server on port", port)
app.get('/', (req, res) => res.send('Helloo World!'))

app.listen(port, () => `Listening on port ${port}`)
app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)
app.use(auth)
app.use(login)