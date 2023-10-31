const { User } = require('../models')
const userData = [
  {
    "name": "Sam",
    "email": "samemail@email.com",
    "password": "password12345"
  },
  {
    "name": "Larry",
    "email": "larryemail@mail.com",
    "password": "password"
  },
  {
    "name": "Amy",
    "email": "Aw0mi@sol.com",
    "password": "passwordpassword"
  }
];

const seeduserdata = () => User.bulkCreate(userData);
module.exports = seeduserdata;
