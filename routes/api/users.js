const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//@route Post api/users public access
//@desc Register users
router.post(
  '/',
  [
    check('name', 'Name is Required')
      .not()
      .isEmpty(),
    check('email', 'Please enter a Valid Email').isEmail(),
    check('password', 'Please enter a password min length is 6').isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('User Route');
  }
);

module.exports = router;
