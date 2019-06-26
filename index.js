const express = require('express')
const app = express()
let port;
require("./db.js")


if(!process.env.PORT){
     port = 40001 
}else{
     port = process.env.PORT
}
    

console.log("running football api server on port", port)
app.get('/', (req, res) => res.send('Helloo World!'))

app.listen(port, () => `Listening on port ${port}`)