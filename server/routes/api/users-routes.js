const router = require('express').Router();
const {
  getAllusers,
  createUsers,
  getUsers,

} = require('../../controllers/users-controller');

router.route('/').get(getAllusers);
router.route('/').post(createUsers);
router.route('/:id').get(getUsers);


module.exports = router;
