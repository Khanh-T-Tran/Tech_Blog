const users = require('./users');
const {User} = require('./../models');
const sequelize = require('../config/connection');


const seeder = async () => {
    // wipes out the user table
    await sequelize.sync({ force: true });
    await User.bulkCreate(users);
    // stop the current node process that hangging and exit node seeds with 0 mean no error happened/ 1 mean an error happened
    process.exit(0); 
};

(async () => {
    await seeder();
})()