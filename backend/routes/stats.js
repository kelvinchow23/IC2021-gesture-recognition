const express = require('express');

const router = express.Router();

//ROUTES
router.get('/', (req, res) => {
    res.send("on stats page");
});

router.get('/other', (req, res) => {
    res.send("other stats stuff");
});

module.exports = router;
