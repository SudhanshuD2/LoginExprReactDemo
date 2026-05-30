const express = require('express');
const router = express.Router();
const pool = require('../pools/pool');
const result = require('../utils/results');

router.post('/signup', async (req, res)=>{
    res.send(result.createResult(null, "<h3>Signup screen.</h3>"))
});

router.post('/signin', async (req, res)=>{
    res.send(result.createResult(null, "<h3>This is you signin screen.</h3>"))
});

module.exports = router