const bcrypt = require('bcrypt')

export const UserModel = (sequelize, type) => (
  sequelize.define('users', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fname: type.STRING,
    lname: type.STRING,
    email: type.STRING,
    password_hash: type.STRING,
    is_active: type.BOOLEAN,
  }, {
    hooks: {
      beforCreate: user => {
        const salt = bcrypt.genSaltSync()
        // eslint-disable-next-line no-param-reassign
        user.password = bcrypt.hashSync(user.password, salt)
      },
      instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password)
      },
    }    
    },
  })
)
