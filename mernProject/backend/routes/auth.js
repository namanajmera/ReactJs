const express = require('express');
const Users = require('../models/Users');
const router = express.Router();
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'iNotebookApp';


// Create a user
router.post('/createUser',[
   body('email','Please enter a valid Email').isEmail(),
   body('password','Minimum Lenght should be 8').isLength({min:8}),
   body('name','PLease enter a valid Name').isLength({min:5})
],async (req,res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
   }
   const salt = await bcrypt.genSalt(10);
   const secPass = await bcrypt.hash(req.body.password,salt)
   Users.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
   }).then(user => {
      const data = {
         user: {
            id: user.id,
         }
      }
      const authToken = jwt.sign(data,JWT_SECRET);
      console.log(authToken);
      res.json({authToken})
   }).catch(error => {
      console.log(error);
      res.json({error:"Please enter a unique value for email.",message:error.message})
   })
})

// Authnticate the User
router.post('/login',[
   body('email','Enter a valid Email').isEmail(),
   body('password','Pussword mujst be atleast 8 Character').isLength({min:8}),
], async(req,res) => {

   // Errors
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

   const {email,password} = req.body;
   try {
      let user = await Users.findOne({email});
      if (!user) {
         return status(400).json({error:"Email And Password mismatch."});
      }
      
      const passwordCompare = await bcrypt.compare(password,user.password);
      if (!passwordCompare) {
         return status(400).json({error:"Email And Password mismatch."});
      }

      const payload = {
         user:{
            id: user.id
         }
      }
      const authToken = jwt.sign(payload,JWT_SECRET)
      res.json(authToken)
   } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server error.");
   }
})

module.exports = router;