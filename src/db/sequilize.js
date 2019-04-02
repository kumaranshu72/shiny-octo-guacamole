import { UserModel } from '../model'

const Sequelize = require('sequelize')

const sequelize = new Sequelize('register', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

export const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!')
  })
