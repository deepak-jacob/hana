process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const rcnModel = require('../models/rcn');
const userModel = require('../models/user');

const should = chai.should();
chai.use(chaiHttp);

describe('Rcn', () => {
  beforeEach((done) => { // Before each test we empty the database
    rcnModel.remove({}, () => {
      done();
    });
  });

  describe('/GET list', () => {
    it('it should GET all the rcnuts', (done) => {
      chai.request(server)
          .get('/rcnuts')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
            done();
          });
    });
  });

  describe('/POST create', () => {
    it('it should POST a rcnuts ', (done) => {
      const rcnut = {
        mark: 'test mark',
        outurn: 'test outurn',
        nutCount: '55',
        quantity: '100kg',
        price: '35',
        port: 'test port',
        arrivalDate: '2016-03-25',
        email: 'test email',
        phone: 'test phone',
        company: 'test company',
      };
      chai.request(server)
          .post('/rcnuts')
          .send(rcnut)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Rcn created!');
            done();
          });
    });
  });
});

describe('Users', () => {
  let authToken;

  describe('create', () => {
    beforeEach((done) => { // Before each test we empty the database
      userModel.remove({}, () => {
        done();
      });
    });

    describe('/POST create', () => {
      it('it should create a new user', (done) => {
        const userObj = {
          email: 'test@test.com',
          password: 'testpass',
          fname: 'firstname',
          lname: 'secname',
        };
        chai.request(server)
          .post('/auth/signup')
          .send(userObj)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('success').eql(true);
            res.body.should.have.property('message').eql('You have successfully signed up! Now you should be able to log in.');
            done();
          });
      });
    });
  });

  describe('login', () => {
    describe('/POST auth login', () => {
      it('it should login user', (done) => {
        const userObj = {
          email: 'test@test.com',
          password: 'testpass',
        };
        chai.request(server)
          .post('/auth/login')
          .send(userObj)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('success').eql(true);
            res.body.should.have.property('token');
            res.body.should.have.property('message').eql('You have successfully logged in!');
            authToken = res.body.token;
            done();
          });
      });
    });
  });

  describe('/GET list', () => {
    it('it should list all the users', (done) => {
      chai.request(server)
          .get('/users')
          .set('authorization', `Bearer ${authToken}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(1);
            res.body[0].email.should.be.eql('test@test.com');
            done();
          });
    });
  });
});

