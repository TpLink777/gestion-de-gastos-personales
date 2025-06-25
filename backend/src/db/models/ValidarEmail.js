const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');

const ValidarEmail = sequelize.define('ValidacionEmail', {
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        codigo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'validacion_email',
        timestamps: false
    });


module.exports = ValidarEmail