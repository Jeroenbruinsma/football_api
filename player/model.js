const Sequelize = require('sequelize')
const db = require("../db.js")
const Team = require('../team/model')

const Player = db.define(
    'player',
    {
      name: {
        type: Sequelize.STRING,
        field: 'name'
      },
      number: {
        type: Sequelize.INTEGER ,
        field: 'number'
      }
    },
    )
    
    Player.belongsTo(Team)

  module.exports = Player