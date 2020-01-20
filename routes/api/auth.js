const express = require('express');
const router = express.Router();

//@route GET api/auth public access
router.get('/', (req, res) => res.send('Auth Route'));

module.exports = router;
