module.exports = (sequelize, type) => {
  return sequelize.define('user', {
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
}
