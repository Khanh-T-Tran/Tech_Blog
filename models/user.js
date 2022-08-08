const { UUIDV4 } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const { toDefaultValue } = require('sequelize/types/utils');
const sequelize = require('./../config/connection');



class User extends Model { }

User.init(
    {
        // define an id column
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                len: [6,],
            },
        },
    },
    {
        sequelize,
        modelName: 'user'
    }
);

module.exports = User;