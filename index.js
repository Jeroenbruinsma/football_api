const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()
let port;
require("./db.js")
require('./team/model')
const teamRouter = require('./team/router')


if(!process.env.PORT){
     port = 40001 
}else{
     port = process.env.PORT
}
    

console.log("running football api server on port", port)
app.get('/', (req, res) => res.send('Helloo World!'))

app.listen(port, () => `Listening on port ${port}`)
app.use(jsonParser)
app.use(teamRouter)