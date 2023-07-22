// here work on routes and send to app.js
 const express = require("express");

 const {home, createUser, getUsers, deleteUsers, editUsers} = require('../controllers/UserController.js');


 const router = express.Router();

  router.get("/",home);

// give data  
  router.post('/createuser',createUser)
// get data from database
  router.get('/getusers',getUsers);

//   user delet and here :/id => params.id
router.delete('/deleteuser/:id',deleteUsers);

// user update

router.put('/edituser/:id',editUsers);

 module.exports = router

