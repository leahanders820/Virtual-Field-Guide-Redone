const router = require('express').Router();
const usersRoutes = require('./users-routes');
const techRoutes = require('./tech-routes.js');

router.use('/users', usersRoutes);
router.use('/tech', techRoutes);

module.exports = router;
