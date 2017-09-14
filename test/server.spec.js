let app = require('../server/server.js')
const [testUser, testUser2] = [{username: 'test', password: '1234'}, { username:'testUser2', password:'2345'}];

describe('Loading Express', () => {
  it('responds to / with a HTML Content Type Header', (done) => {
    request(app)
    .get(`/`)
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) throw err;
      done();
    });
  });
});

describe('Sign up', () => {
  it('Returns error when username is missing', (done) => {
    request(app)
    .post('/signup')
    .send({ password: '1234' })
    .expect(400)
    .end((err, res) => {
      if (err) throw err
      done();
    });
  });
  it('Returns error when password is missing', (done) => {
    request(app)
    .post('/signup')
    .send({ username: 'test' })
    .expect(400)
    .end((err, res) => {
      if (err) throw err
      done();
    });
  });
  it('New user is successfully created', (done) => {
    request(app)
    .post('/signup')
    .send(testUser)
    .expect(200)
    .end((err, res) => {
      if (err) throw err
      done();
    });
  });
  it('User has already been created', (done) => {
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
describe('Sign in', () => {
  it('User successfully logged in', (done) => {
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
  it('Non-existing user signed in', (done) => {
    request(app)
    .get('/signin')
    .send(testUser2)
    .expect(401)
    .end((err, res) => {
      expect(res.header['location']).contains('/signup');
      done();
    });
  });
  // it('Redirects to home page when non-existing user signs in', (done) => {
  //   request(app)
  //   .get('/signin')
  //   .send(testUser2)
  //   .expect(401)
  //   .end((err, res) => {
  //     if (!res.header.location) throw err;
  //     expect(res.header['location']).contains('/home');
  //     done();
  //   });
  // });
});
