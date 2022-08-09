const router = require('express').Router();
const apiController = require('./apiController');
const { User } = require('./../models');

router.get('/', (req, res) => res.render('landing_page'));

// HTML ROUTES + API POST,DELETE,PUT/PATCH routes
router.get('/users', async (req, res) => {
    try {
        // Find all the user in the database
        const dbusersData = await User.findAll();
        console.log(dbusersData);
        // for each user in dbUser we going to return dbUser, then get the data insql objects and turn to plain json user objects
        const users = dbusersData.map(dbUser => dbUser.get({ plain: true }));
        console.log(users);
        // the array of plain json objects will be feed into the users template
        res.render('users', { users });

    } catch (error) {
        console.log('Err L21 homepageController', error);
        res.status(500).json(error);
    }
});

router.use('/api', apiController);

module.exports = router;