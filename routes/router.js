const express = require('express');
const router = express.Router();

//Listen for get requests on routes.
router.get('/', (req, res) => {
    res.send('Home Page, I am using express Router')
});

router.get('/blogs', (req, res) => {
    res.send('Hello World! This Is The Blogs Page!')
})

module.exports = router;