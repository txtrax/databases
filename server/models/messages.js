var db = require('../db');

module.exports = {
  getAll: function (callback) {

    // Uses 'SELECT * FROM table' database query
    db.dbConnection.query('SELECT * FROM messages', (err, results) => {
      callback(err, results);
    });

  }, // a function which produces all the messages




  create: function (messageData, callback) {
    const { text, userID, friendID, roomID } = messageData;
    console.log('Made it here:', `INSERT INTO messages(text, userID, friendID, roomID) VALUES ("${text}",${userID},${friendID},${roomID})`);

    // Uses 'INSERT INTO table VALUES (xyz)' database command
    db.dbConnection.query(`INSERT INTO messages(text, userID, friendID, roomID) VALUES ("${text}",${userID},${friendID},${roomID})`, (err, results) => {
      console.log(err);
      callback(err, results);
    });

  } // a function which can be used to insert a message into the database
};

// INSERT INTO messages(text, userID, friendID, roomID) VALUES ('Come visit me :)', 1, 1, 1);