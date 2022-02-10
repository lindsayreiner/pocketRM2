const User = require('./User.js');
const Connection = require('./Connection.js');

User.hasMany(Connection, {
    foreignKey: 'user_id',
});

Connection.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = {
    User,
    Connection
};