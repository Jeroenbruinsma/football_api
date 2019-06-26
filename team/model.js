const Sequelize = require('sequelize')
const db = require("../db.js")

const Team = db.define(
    'team',
    {
      name: {
        type: Sequelize.STRING,
        field: 'team_name'
      }
    }
  )
  Team.create({
    name: 'shure!!',
    }).then(team => console.log(`The team is now created. The ID = ${team.id}`))



module.exports = Team