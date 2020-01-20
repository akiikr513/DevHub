const express = require('express');
const router = express.Router();

//@route GET api/Posts public access
router.get('/', (req, res) => res.send('Posts Route'));

module.exports = router;
