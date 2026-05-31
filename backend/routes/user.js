const express = require('express');
const pool = require('../pool');
const result = require('../results');
const router = express.Router();

// router.post('/signup', async (req, res) => {
//     const { name, email, password, mobile, city } = req.body
//     const sql = 'INSERT INTO users(name,email,password,mobile,city) VALUES(?,?,?,?,?)'
//     try {
//         const data = await pool.query(sql, [name, email, password, mobile, city])
//         res.send(result.createResult(null, data[0]))
//     }
//     catch (error) {
//         res.send(result.createResult(error))
//     }
// })

router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`
    try {
        const data = await pool.query(sql, [email, password])
        const myuser = data[0][0]
        if (myuser){
            res.send(result.createResult(null, myuser))
        }
            
        else{
            res.send(result.createResult('Invalid email or password'))
        }

    } catch (error) {
        res.send(result.createResult(error))
    }
});

module.exports = router