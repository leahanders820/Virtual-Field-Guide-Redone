const { Users } = require('../models'); // Import your User model here

const userController = {
  // Get all users
  getAllusers: async (req, res) => {
    try {
      const users = await Users.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Create a new user
  createUsers: async (req, res) => {
    const { email, password } = req.body;

    try {
      const newUser = new Users({
        email: email,
        password: password,
      });

      const result = await newUser.save();
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Get a specific user by ID
  getUsers: async (req, res) => {
    const userId = req.params.id;

    try {
      const user = await Users.findById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = userController;
