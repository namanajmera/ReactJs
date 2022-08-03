const express = require('express');
const Users = require('../models/Users');
const router = express.Router();


router.post('/addUser',(req,res) => {
   console.log(req.body);
   const user = Users(req.body);
   user.save();
   res.send(req.body)
})

module.exports = router;