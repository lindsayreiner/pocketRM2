const User = require('./User');
const Connection = require('./Connection');

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