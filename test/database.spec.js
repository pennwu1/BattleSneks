let app = require('../server/server.js');
// let User = require('../database/users/userModel.js');
let mongoose = require('mongoose');
let userController = require('../database/users/userController.js');
let scoreController = require('../database/score/scoreController.js');
const bcrypt = require('bcrypt');
const [test1, test2, test3, duplicateUser] = [{ username: test1, password: '1234' }, { username: test2, password: '1234' }, { username: test3, password: '1234' }, { username: test3, password: '2345'}]
const scoreTest1 = {  }

  describe('Database', () => {
    it('Connects to database', () => {
      // run mongod
      expect(mongoose.connection.readyState).to.equal(1);
    });
    // save new user to database
    describe('User events', () => {
      it('User is saved to database', async () => {
        const data = await userController.createUser({test3});
        console.log('data', data);
        expect(data.username).to.equal(test3.username);
        });
      // overwrite password
      it('Password is not overwritten', async () => {
        await userController.createUser({duplicateUser});
        const encryptedUser = await userController.findUser({ username: test3.username });
        expect(bcrypt.compare(test3.password, hash, (err, res))).to.equal(true);
      });
      // encrypte password
      it('User password is encrypted', async () => {
        const encryptedUser = await userController.findUser({ username: test3.username });
        expect(bcrypt.compare(test3.password, hash, (err, res))).to.equal(false);
      });
      // test for unique user
      it('User is unique', async () => {
        expect(await userController.createUser({test3})).to.throw(Error);
      });
      // delete user
      it('User is deleted', async () => {
        const data = await userController.deleteUser({test3});
        expect(data.username).to.equal(test3.username);
      });
      // delete all users
      it('Deletes all users', (done) => {
        userController.deleteUsers();
        done();
      });
      // find all users
      it('Finds all users', async () => {
        await userController.createUser({test1});
        await userController.createUser({test2});
        await userController.createUser({test3});
        const users = await userController.getUsers();
        expect(users.length).to.Equal(3);
      });
    });
    describe("userboard", () => {
    // Save score
      it('save score', async () => {
        const user = await userController.createUser(record);
        const savedScore = await scoreController.saveScore(user, score);
        expect(savedScore).to.not.throw(Error);
      });
      it('finds all scores', async () => {
        const scores = await scoreController.findScores({});
        expect(scores.length).to.equal(1);
      });
      it('deletes all scores', async () => {
        const deletedScores = scoreController.deleteScores();
        expect(scores.length).to.equal(1);
      })
    });
  });
