const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
   obj = {
      a: 'Notes'
   }
   res.json(obj);
})

module.exports = router;