const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Connection extends Model { }

Connection.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        },
        metAt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hometown: {
            type: DataTypes.STRING
        },
        relationship: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        birthday: {
            type: DataTypes.DATE
        },
        occupation: {
            type: DataTypes.STRING
        },
        company: {
            type: DataTypes.STRING
        },
        partner: {
            type: DataTypes.BOOLEAN
        },
        partnerName: {
            type: DataTypes.STRING
        },
        anniversary: {
            type: DataTypes.DATE
        },
        children: {
            type: DataTypes.BOOLEAN
        },
        childName: {
            type: DataTypes.STRING
        },
        childBirthday: {
            type: DataTypes.DATE
        },
        pets: {
            type: DataTypes.BOOLEAN
        },
        petName: {
            type: DataTypes.STRING
        },
        interestsHobbies: {
            type: DataTypes.STRING
        },
        importantDatesTitle: {
            type: DataTypes.STRING
        },
        importantDatesDate: {
            type: DataTypes.DATE
        },
        giftIdeas: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'connection',
    }
);

module.exports = Connection;
