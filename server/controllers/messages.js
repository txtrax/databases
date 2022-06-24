var models = require('../models');
var app = require('express');

module.exports = {
  get: function (req, res) {

    // Calls models/messages.js's getAll() function
    models.messages.getAll((err, results) => {
      if (err) {
        // Send error code 4xx
        res.sendStatus(400);

      // Else send JSON-ified results
      } else {
        res.send(results);
        // res.send(200).json(result);
        // res.json(result);
      }
    });

  }, // a function which handles a get request for all messages

  post: function (req, res) {
    console.log('HERE');
    // Calls models/messages.js's create() function
    // Check req.body and ensure queries work
    models.messages.create(req.body, (err, results) => {
      if (err) {
        //console.log(err);
        res.sendStatus(500);
      } else {
        res.send(201);
      }
    });

  } // a function which handles posting a message to the database
};
