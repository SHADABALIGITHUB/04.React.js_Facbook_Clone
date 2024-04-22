const express = require('express');
const router = express.Router();
const connection=require('../db');


// Define your login routes
router.post('/', async(req, res) => {
             

    try {
        const connections = await connection.getConnection();
        
       
  
         let sql =`INSERT INTO user(name,surname,email,password,gender) values(?,?,?,?,?)`;
         const FormData=[
          req.body.name,
          req.body.surname,
          req.body.email,
          req.body.password,
          req.body.gender,
         ]
         console.log(FormData);
         
        const[result]=await connections.query(sql,FormData);
  
        if (result.affectedRows === 1) {
          res.status(201).send({ message: 'Account Created Successfully' });
          console.log('1 record inserted');
        } else {
          console.error('Unexpected number of rows affected:', result.affectedRows);
          res.status(500).send({ message: 'Internal Server Error' }); // Generic error for security
        }
    
          connections.release();
        
      } catch (error) {
        console.error('Error:', error);
        
      }
});

module.exports = router;
