var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // Queries everything from users table
    db.dbConnection.query('SELECT * FROM users', (err, results) => {
      callback(err, results);
    });
  },

  create: function (data, callback) {
    // input: obj with user prop
    // texts need to be wrapped in quotes
    const { user } = data;
    console.log('Is this Minggui?', user);
    db.dbConnection.query(`INSERT INTO users(name) VALUES ("${user}")`, (err, results) => {
      console.log(err);
      callback(err, results);
    });
  }
};
