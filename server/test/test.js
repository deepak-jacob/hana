process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const rcnModel = require('../model/rcn');

const should = chai.should();
chai.use(chaiHttp);

describe('rcnModel', () => {
  beforeEach((done) => { // Before each test we empty the database
    rcnModel.remove({}, () => {
      done();
    });
  });

  describe('/GET rcnuts', () => {
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

  describe('/POST rcnuts', () => {
    it('it should POST a rcnuts ', (done) => {
      const rcnut = {
        mark: 'test mark',
        outurn: 'test outurn',
        nutCount: '55',
        quantity: '100kg',
        price: '35',
        port: 'test port',
        arrivalDate: '26-10-2016',
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
