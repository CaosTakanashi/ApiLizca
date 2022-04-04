'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cursoB extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cursoB.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    rango: DataTypes.STRING,
    asignatura: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cursoB',
  });
  return cursoB;
};