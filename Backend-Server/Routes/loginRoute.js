const express = require('express');
const router = express.Router();
const connection=require('../db');


router.post('/', async(req, res) => {
    const { email,password } = req.body;


    try {
        const connections = await connection.getConnection();
        const [rows] = await connections.query('SELECT * FROM user WHERE email = ? AND password = ?', [email,password]);
        connections.release();
  
        if (rows.length > 0) {
            // Email found in the database, send success response
            res.status(200).json({ message: 'Email verified successfully' });
        } else {
            // Email not found in the database, send error response
            res.status(404).json({ error: 'Email not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
             
});

module.exports = router;
