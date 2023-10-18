const db = require('../config/connection');
const { Users } = require('../models');
const { Animals } = require('../models');
const { Plants } = require('../models');
const { Landmarks } = require('../models');
const cleanDB = require('./cleanDB');




db.once('open', async () => {
  await cleanDB('');

  await Users.insertMany();

  console.log('Users seeded');
  process.exit(0);
});
