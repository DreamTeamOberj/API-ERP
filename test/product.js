const assert = require('assert');
const sinon = require('sinon');
const request = require('supertest');

const app = require('../routes/product');
const productController = require('../controllers/product');

describe('Product Controller', function() {

  describe('findAll', function() {

    it('should return all products', function(done) {
      const products = [        { id: 1, name: 'godd' },        { id: 2, name: 'pot' }  ];
      const queryStub = sinon.stub();
      queryStub.callsArgWith(1, null, products, null);
      const connectionStub = sinon.stub(productController, 'getConnection').returns({
        query: queryStub
      });

      request(app)
        .get('/products')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);

          assert.deepStrictEqual(res.body, products);
          assert.strictEqual(queryStub.callCount, 1);
          assert.strictEqual(connectionStub.callCount, 1);

          connectionStub.restore();
          done();
        });
    });

    it('should throw an error if there is an error in the query', function(done) {
      const error = new Error('Database error');
      const queryStub = sinon.stub();
      queryStub.callsArgWith(1, error, null, null);
      const connectionStub = sinon.stub(productController, 'getConnection').returns({
        query: queryStub
      });

      request(app)
        .get('/products')
        .expect(500)
        .end(function(err, res) {
          if (err) return done(err);

          assert.strictEqual(res.text, 'Database error');
          assert.strictEqual(queryStub.callCount, 1);
          assert.strictEqual(connectionStub.callCount, 1);

          connectionStub.restore();
          done();
        });
    });

  });

});