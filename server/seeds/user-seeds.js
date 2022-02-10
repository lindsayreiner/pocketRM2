const { User } = require('../models/User.js');

const userData = [
    {
        firstName: "Lindsay",
        lastName: "Reiner",
        email: "lindsay@pocketrm.com",
        password: pass1234
    },
    {
        firstName: "Wesley",
        lastName: "Taylor",
        email: "wesley@pocketrm.com",
        password: pass1234
    },
    {
        firstName: "Sean",
        lastName: "McCarthy",
        email: "sean@pocketrm.com",
        password: pass1234
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;