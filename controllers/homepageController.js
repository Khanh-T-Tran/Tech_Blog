const router = require('express').Router();

router.get('/',(req,res) =>{
    res.render('signup', {signup});
});



module.exports = router;