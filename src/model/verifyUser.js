export const verifyModel = (sequelize, type) => (
    sequelize.define('verify_user', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: type.INTEGER    
      },
      verification: type.STRING   
    } )
)
