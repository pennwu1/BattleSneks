let app = require('../server/server.js');
let User = require('../score/scoreModel.js');
let mongoose = require('mongoose');
let scoreController = require('../score/scoreController.js');
const bcrypt = require('bcrypt');
const test3 = { username: test3, password: '1234' };
const duplicateUser = { username: test3, password: '2345'};

  describe('Database', () => {
    it('Connects to database', () => {
      // run mongod first
      expect(mongoose.connection.readyState).to.equal(1);
    });
    // Is the user saved to the database?
    describe('User events', () => {
      it('User is saved to database', async () => {
        const data = await scoreController.createUser({test3});
        expect(data.username).to.equal(test3.username); 
        });
      // Is the password being overwritten?
      it('Password is not overwritten', async () => {
        await scoreController.createUser({duplicateUser});
        const encryptedUser = await scoreController.findUser({ username: test3.username });
        expect(bcrypt.compare(test3.password, hash, (err, res))).to.equal(true);
        // create User
        // 
      });
      // Is the password encrypted?
      it('User password is encrypted', async () => {
        const encryptedUser = await scoreController.findUser({ username: test3.username });
        expect(bcrypt.compare(test3.password, hash, (err, res))).to.equal(false);
      });
      // Is the username unique?
      it('User is unique', async () => {
        expect(await scoreController.createUser({test3})).to.throw(Error);
      });
      // Is the username deleted?
      it('User is deleted', async () => {
        const data = await scoreController.deleteUser({test3});
        expect(data.username).to.equal(test3.username);
      });
    });
    // Scores
      // Are all scores found?
      // Is the score saved?
      // Is the score deleted? (E.g. reset scores)
  
  // Routes
  // Time
  });
