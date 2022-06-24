var models = require('../models');

module.exports = {
  get: function (req, res) {
    // Invokes models/users's getAll() function
    models.users.getAll((err, result) => {
      if (err) {
        console.log(err);
        res.send(400);
      } else {
        res.send(result);
      }
    });
  },

  post: function (req, res) {
    // Invokes models/users's create() function
    models.users.create(req.body, (err, results) => {
      if (err) {
        res.send(400);
      } else {
        res.send(201);
      }
    });
  }
};
