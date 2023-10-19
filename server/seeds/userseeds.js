const db = require('../config/connection');
const { Users } = require('../models');



db.once('open', async () => {
    await cleanDB('');
  
    await Users.insertMany(userData);
  
    console.log('Users seeded!');
    process.exit(0);
  });