const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const connectionRoutes = require('./connection-routes.js');


router.use('/user', userRoutes);
router.use('/connection', connectionRoutes);


module.exports = router;