const express = require('express');
const Users = require('../models/Users');
const router = express.Router();
const {body, validationResult} = require('express-validator')


router.post('/createUser',[
   body('email','Please enter a valid Email').isEmail(),
   body('password','Minimum Lenght should be 8').isLength({min:8}),
   body('name','PLease enter a valid Name').isLength({min:5})
],(req,res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
   }
   Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
   }).then(user => res.json(user)).catch(error => {
      console.log(error);
      res.json({error:"Please enter a unique value for email.",message:error.message})
   })
})

module.exports = router;