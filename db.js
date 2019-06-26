const Sequelize = require('sequelize')



const databaseUrl = process.env.DATABASE_URL ||'postgres://postgres:passwd@localhost:5432/postgres'
sequelizeObj = new Sequelize(databaseUrl)
sequelizeObj.sync()
            .then(() => console.log("database has been updated"))
            .catch(err => console.error("Got some error:", err))

module.exports = sequelizeObj