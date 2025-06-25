const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');

const Usuario = sequelize.define('Usuario', {

    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    monedaBase: {
        type: DataTypes.STRING,
        allowNull: false,
    }

    }, {
        tableName: 'usuarios',
        timestamps: true,
    }
);

module.exports = Usuario;
