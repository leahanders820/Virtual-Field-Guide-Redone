const router = require('express').Router();
const {
  getAllusers,
  createUsers,
  getUsers,
  createVote,
} = require('../../controllers/users-controller');

router.route('/').get(getAllusers);
router.route('/').post(createUsers);
router.route('/:id').get(getUsers);
router.route('/:id').put(createVote);

module.exports = router;
