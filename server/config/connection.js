const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        }
    });

async function authenticateSequelize() {
    try {
        await sequelize.authenticate();
        console.log('Sequelize connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

authenticateSequelize();


module.exports = sequelize;