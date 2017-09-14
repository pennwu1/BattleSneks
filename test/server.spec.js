let app = require('../server/server.js')
// testUser / testUser2 is suspect
const [testUser, testUser2] = [{username: 'test', password: '1234'}, { username:'testUser2', password:'2345'}];

describe('server', () => {
  describe('GET /', () => {
    it('should respond with html', (done) => {
      request(app)
      .get(`/`)
      .expect(200)
      .expect('Content-Type', /html/)
      // remove this when possible
      .end((err, res) => {
        if (err) throw err;
        done();
      });
    });
  });
  describe('POST /signup', () => {
    describe('without username', () => {
      it('should respond with 400 bad request', (done) => {
        request(app)
        .post('/signup')
        .send({ password: '1234' })
        .expect(400)
        .end((err, res) => {
          if (err) throw err
          done();
        });
      });
    // POST /signup
  });
      describe('without password', () => {
        it('should respond with 400 bad request', (done) => {
          request(app)
          .post('/signup')
          .send({ username: 'test' })
          .expect(400)
          .end((err, res) => {
            if (err) throw err
            done();
          });
        });
      });
      describe('with valid credentials', () => {
        it('should redirect to homepage', (done) => {
          request(app)
          .post('/signup')
          .send(testUser)
          .expect(200)
          .end((err, res) => {
            if (err) throw err
            done();
          });
        });
      });
      describe('with existing user credentials', () => {
        it('should respond with 400 bad request', (done) => {
          request(app)
          .post('/signup')
          .send(testUser)
          .expect(400)
          .end((err, res) => {
            if (err) throw err
            done();
          });
        });
      });
    });
  describe('GET /signin', () => {
    // GET /signin
    describe('with existing user credentials', () => {
      it('should redirect to homepage', (done) => {
        request(app)
        .get('/signin')
        .send(testUser)
        .expect(302)
        .end((err, res) => {
          if (err) throw err
          expect(res.header['location']).contains('/home');
          done();
        });
      });
    });
    describe('without existing user credentials', () => {
      it('should respond with 400 bad request', (done) => {
        request(app)
        .get('/signin')
        .send(testUser2)
        .expect(401)
        .end((err, res) => {
          expect(res.header['location']).contains('/signup');
          done();
        });
      });
    });
  });
});