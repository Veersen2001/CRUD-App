// here work on routes and send to app.js
 const express = require("express");

 const {home, createUser} = require('../controllers/UserController.js');


 const router = express.Router();

  router.get("/",home);
  router.post('/createUser',createUser)


 module.exports = router

