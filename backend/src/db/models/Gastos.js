const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');
const Usuario = require('./usuarios')
const Categoria = require('./categorias')

const Gasto = sequelize.define('Gasto', {

    // llaves foraneas de tablas como usuario y categorias
    usuarioId: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        },
        allowNull: false,
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Categoria,
            key: 'id'
        },
        allowNull: false,
    },

    monto: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    moneda: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    total: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }

}, {
    tableName: 'gastos',
    timestamps: true,
})

// relación de 1:N entre la tabla usuarios y gastos

Usuario.hasMany(Gasto, {
    foreignKey: 'usuarioId',
    sourceKey: 'id'
})

Gasto.belongsTo(Usuario, {
    foreignKey: 'usuarioId',
    targetKey: 'id'
})


// ralacion de 1:N entre la tabla categorias y gastos

Categoria.hasMany(Gasto, {
    foreignKey: 'categoriaId',
    sourceKey: 'id'
})

Gasto.belongsTo(Categoria, {
    foreignKey: 'categoriaId',
    targetKey: 'id'
})


module.exports = Gasto

