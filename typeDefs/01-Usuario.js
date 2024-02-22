const { DataTypes } = require('sequelize');
const sequelize = require('../configura/bd.js');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
});

export const Usuario1 = User;