const express = require('express');
const router = express.Router();

//Listen for get requests on routes that are not endpoints.
router.get('/', (req, res) => {
    res.send('Home Page, I am using express Router')
});

module.exports = router;