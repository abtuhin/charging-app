import Sequelize from 'sequelize';

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  firstname: {
    type: Sequelize.STRING(50),
    allowNull: false, 
  },
  lastname: {
    type: Sequelize.STRING(50),
    allowNull: false, 
  },
  fullname: {
    type: Sequelize.STRING(100),
  },
  email: {
    type: Sequelize.STRING(300),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(300),
    allowNull:false
  },
});

export default User;