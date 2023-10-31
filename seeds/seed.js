const sequelize = require('../config/connection');
const seedblogpostdata = require('./blogpostData');
const seedcommentdata = require('./commentData');
const seeduserdata = require('./userData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seeduserdata();

  await seedblogpostdata();

  await seedcommentdata();

  process.exit(0);
};

seedDatabase();
