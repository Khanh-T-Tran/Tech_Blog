// const users = require('./users');
// const { User } = require('./../models');
// const sequelize = require('../config/connection');


// const seeder = async () => {
//     // console.log('hi');
//     // wipes out the user table
//     // force: true adds a DROP TABLE IF EXISTS before trying to create the table - if you force, existing tables will be overwritten.
//     await sequelize.sync({ force: true });
//     await User.bulkCreate(users);
//     // stop the current node process that hangging and exit node seeds with 0 mean no error happened/ 1 mean an error happened
//     process.exit(0);
// };

// (async () => {
//     // console.log('hi seeds');
//     await seeder();
// })();