const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const userModel = require('../models/userModel');
const User = mongoose.model('User');
const config = require('../../config/secrets');

exports.user_register = (req, res) => {
  let {body} = req;
  let new_user = new User(body)

  new_user.save((error, user) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(201);
      res.json(user);
    }
  })
}

exports.user_login = (req, res) => {
  var {body} = req;

  User.findOne({email: body.email}, (error, user) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      if(user.email === body.email && user.password === body.password){
        jwt.sign({user}, config.secrets.jwt_key, {expiresIn: '30 days'}, (error, token) => {
          console.log(error);
          if(error){
            res.status(400);
            console.log(error);
            res.json({message: "Mot de passe ou email erroné."});
          }
          else{
            // res.json({token: token})
            res.json({token})
          }
        })
      }
    }
  })
}
