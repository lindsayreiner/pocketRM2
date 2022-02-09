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
        lastName: DataTypes.STRING,

        metAt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hometown: DataTypes.STRING,
        relationship: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        birthday: DataTypes.DATE,
        occupation: DataTypes.STRING,
        company: DataTypes.STRING,
        partner: DataTypes.BOOLEAN,
        partnerName: DataTypes.STRING,
        anniversary: DataTypes.DATE,
        children: DataTypes.BOOLEAN,
        childName: DataTypes.STRING,
        childBirthday: DataTypes.DATE,
        pets: DataTypes.BOOLEAN,
        petName: DataTypes.STRING,
        interestsHobbies: DataTypes.STRING,
        importantDatesTitle: DataTypes.STRING,
        importantDatesDate: DataTypes.DATE,
        giftIdeas: DataTypes.STRING,

    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'Connection',
    }
);

module.exports = Connection;
