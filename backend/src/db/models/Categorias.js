const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');

const Categoria = sequelize.define('Categoria', {

    nombreCategoria: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    iconos: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    estado: {
        type: DataTypes.STRING(100),
        allowNull: false
    }

    }, {
        tableName: 'categorias',
        timestamps: true,
    }
)

module.exports = Categoria
