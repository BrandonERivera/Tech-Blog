const { User } = require('../models')
const userData = [
  {
    "name": "Sam",
    "password": "password12345"
  },
  {
    "name": "Larry",
    "password": "password"
  },
  {
    "name": "Amy",
    "password": "passwordpassword"
  }
];

const seeduserdata = () => User.bulkCreate(userData);
module.exports = seeduserdata;
