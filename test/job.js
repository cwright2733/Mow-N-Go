//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Job = require('../db/models/jobs');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Jobs', () => {
    beforeEach((done) => { //Before each test we empty the database
        Job.deleteMany,({}, (err) => { 
           done();           
        });        
    });

//   * Test the /GET route

  describe('/GET job', () => {
      it('it should GET all the jobs in the db', (done) => {
        chai.request(server)
            .get('/api/jobs')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  
// all fields are required except for special instructions so ommiting first name should prevent the post
  describe('/POST job', () => {
    it('it should not POST a job without the required  first name field', (done) => {
        let job = {
            lastName: "Davis",
            phoneNum: "123.456.7890",
            email: "test@email.com",
            address: "123 Placeholder Ln. Atlanta, GA 30309"
        }
      chai.request(server)
          .post('/api/job')
          .send(job)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('firstName');
                res.body.errors.should.have.property('firstName');
                res.body.errors.firstName.should.have.property('kind').eql('required');
            done();
          });
        });
    });

    it('it should POST a job ', (done) => {
        let job = {
            firstName: "John",
            lastName: "Davis",
            phoneNum: "123.456.7890",
            email: "test@email.com",
            address: "123 Placeholder Ln. Atlanta, GA 30309"
        }
      chai.request(server)
          .post('/api/job')
          .send(job)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Job successfully posted!');
                res.body.job.should.have.property('firstName');
                res.body.job.should.have.property('lastName');
                res.body.job.should.have.property('phoneNum');
                res.body.job.should.have.property('email');
                res.body.job.should.have.property('address');
            done();
        });
    });

    describe('/GET/:id job', () => {
        it('it should GET a job by the given id', (done) => {
            let job = new Job({ firstName: "Jake", lastName: "David", phoneNum: "123.456.7890", email: "test@email.com", address: "123 Placeholder Ln. Atlanta, GA 30309"});
            job.save((err, job) => {
                chai.request(server)
              .get('/api/job/' + job.id)
              .send(job)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('firstName');
                    res.body.should.have.property('lastName');
                    res.body.should.have.property('phoneNum');
                    res.body.should.have.property('email');
                    res.body.should.have.property('address')
                    res.body.should.have.property('_id').eql(job.id);
                done();
              });
            });
  
        });
    });
});
