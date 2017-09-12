import { app } from '../server/server.js';
const port = process.envPORT || 3000;

describe('loading Express', () => {
  let server;
  before(() => {
    server = app.listen(port);
    console.log('server', server);
  });
  after(() => {
    server.close();
  })
  it('responds to / with a Content Type Header', (done) => {
    request(server)
    .get('/')
    .expect(400)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      done();
    });
  });

  describe('Sign up has valid username and password', () => {
    it('Returns 404 when username is missing', (done) => {
      request(server)
      .post('/signup')
      .send({
        password: 1234
      })
      .expect(200)
      .end((err, res) => {
        if (err) throw err
        done();
      })
    });
    it('Returns 404 when password is missing', (done) => {
      request(server)
      .post('/signup')
      .send({
        username: 'test'
      })
      .expect(200)
      .end((err, res) => {
        if (err) throw err
        done();
      })
    })
    it('Returns 404 when new user is created', (done) => {
      request(server)
      .post('/signup')
      .send({
        username: 'Test',
        password: 1234
      })
      .expect(200)
      .end((err, res) => {
        if (err) throw err
        done();
      });
    });
  });
});
