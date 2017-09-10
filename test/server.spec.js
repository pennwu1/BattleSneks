let app = require('../server/server.js')
const testUser = {
  username: 'test',
  password: '1234'
}
const testUser2 = {
  username: 'test2',
  password: '2345'
}

describe('loading Express', () => {
  it('responds to / with a Content Type Header', (done) => {
    request(app)
    .get(`/`)
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) throw err;
      done();
    });
  });

  describe('Signup', () => {
    it('Returns 400 when username is missing', (done) => {
      request(app)
      .post('/signup')
      .send({ password: '1234' })
      .expect(400)
      .end((err, res) => {
        if (err) throw err
        done();
      });
    });
    it('Returns 400 when password is missing', (done) => {
      request(app)
      .post('/signup')
      .send({ username: 'test' })
      .expect(400)
      .end((err, res) => {
        if (err) throw err
        done();
      });
    });
    describe('Signup with username and password', () => {
      it('Returns 200 when new user is successfully created', (done) => {
        request(app)
        .post('/signup')
        .send(testUser)
        .expect(200)
        .end((err, res) => {
          if (err) throw err
          done();
        });
      });
      it('Returns 401 when user has already already created', (done) => {
        request(app)
        .post('/signup')
        .send(testUser)
        .expect(401)
        .end((err, res) => {
          if (err) throw err
          done();
        });
      });
    });
  });
  describe('Sign in', () => {
    it('Returns 200 when existing user signs in', (done) => {
      request(app)
      .get('/signin')
      .send(testUser)
      .expect(200)
      .end((err, res) => {
        if (err) throw err
        done();
      });
    });
    describe('Sign in fails', () => {
      it('Returns 401 when a non-existing user signs in', (done) => {
        request(app)
        .get('/signin')
        .send(testUser2)
        .expect(401)
        .end((err, res) => {
          if (err) throw err
          done();
        });
      });
      it('Redirects to signup page when non-existing user signs in', (done) => {
        request(app)
        .get('/signin')
        .send(testUser2)
        .expect(401)
        .end((err, res) => {
          if (!res.header.location) throw err;
          expect(res.header['location']).contains('/home')
          done();
        });
      });
    });
  });
});

