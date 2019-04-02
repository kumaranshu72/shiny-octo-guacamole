export const UserModel = (sequelize, type) => (
  sequelize.define('user', {
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
  })
)
