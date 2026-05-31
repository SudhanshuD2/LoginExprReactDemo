const express = require("express");
const cors = require("cors");
const pool = require('./pool');
const usrRouter = require('./routes/user');
const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

(async () => {
    try {
        const conn = await pool.getConnection();
        console.log("MySQL Connected");
        conn.release();
    } catch (err) {
        console.log("Database Error:", err);
    }
})();



app.use('/user', usrRouter);

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const sql ="SELECT * FROM users WHERE email=? AND password=?";
  
//   db.query(sql, [email, password], (err, result) => {
//     if (err) {
//       return res.status(500).json({
//         message: "Database error"
//       });
//     }

//     if (result.length > 0) {
//       res.json({
//         success: true,
//         message: "Login successful"
//       });
//     } else {
//       res.json({
//         success: false,
//         message: "Invalid credentials"
//       });
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});