const User = require('./userModel.js');

module.exports = {
  createUser: (req, res) => {
    let newUser = new User({
      // Request body contains the username and password
      username: req.body.username,
      password: req.body.password
    });
    // Create a new document, where the username and password are saved to the model
    newUser.save((err, user) => {
      if (err) return res.status(400).send('cannot save user');
      return res.status(200).send('saved message');
    });
  },
  findUser: (req, res) => {
    User.findOne({
      username: req.body.username,
      password: req.body.password
    }, (err, user) => {
      // Redirect to signup page
      if (err || user === null) return res.status(401).redirect('/signup');
      return res.status(200).redirect('/home');
    });
  },
  deleteUser: (user) => {
    
  },
  getUsers: () => {

  },
  deleteUsers: () => {

  }
}