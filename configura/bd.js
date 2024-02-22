const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'postgres'
});

export const conexion = sequelize;