const express = require('express')
const app = express()
let port;


if(!process.env.PORT){
     port = 4000 
}else{
     port = process.env.PORT
}
    

console.log("running football api server on port", port)
app.get('/', (req, res) => res.send('Helloo World!'))

app.listen(port, () => `Listening on port ${port}`)