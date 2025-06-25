const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');
const Usuario = require('./usuarios')

const Conversion = sequelize.define('Conversion', {

    monedaOrigen: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }, 
    monedaDestino: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    tasa: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    monedaBase: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        },
        allowNull: false,
    },

    }, {
        tableName: 'conversiones',
        timestamps: true,
    }
);

Usuario.hasMany(Conversion, {
    foreignKey: 'usuarioId',
    sourceKey: 'id'
})

Conversion.belongsTo(Usuario, {
    foreignKey: 'usuarioId',
    targetKey: 'id'
})

module.exports = Conversion
