const request = require('supertest');
const app = require('./app')

describe('Routes', () => {
    test('/people should return person page', (done) => {
        request(app)
            .get('/people')
            .expect(200)
            .expect('content-type', /json/)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });

    test('It should respond the GET method at root request', () => {
        return request(app).get('/').expect(200);
    });

    test('It should fail if the get request is invaild.', (done) => {
        request(app)
            .get('/hello')
            .expect(404)
            .expect('content-type', /html/)
            .end((err, res) => {
                if (err) throw err;
                done()
            })
    })
});



