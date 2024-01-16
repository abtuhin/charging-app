import Sequelize from 'sequelize';

const CDR = sequelize.define("cdrs", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  sessionId: {
    type: Sequelize.STRING(50),
    allowNull: false, 
    unique: true
  },
  vehicleId: {
    type: Sequelize.STRING(50),
    allowNull: false, 
  },
  start: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  end: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  totalCost: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  }
});

export default CDR;