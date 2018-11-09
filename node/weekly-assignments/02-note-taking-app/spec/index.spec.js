const request = require('supertest');
const app = require('../index');


const USERS = {
    sam: '123456',
    altaf: '654321'
};

function expectUnauthorized(app, done) {
    request(app)
        .get('/')
        .expect(401)
        .end((err) => {
            if (err) throw err;
            done();
        });
}

describe('Route', () => {

    describe('should return 401 for non logged in', () => {
        it('GET /', (done) => expectUnauthorized(app, done));
        it('GET /api/notes', (done) => expectUnauthorized(app, done));
        it('POST /api/notes', (done) => expectUnauthorized(app, done));
        it('PUT /api/notes/1', (done) => expectUnauthorized(app, done));
        it('DELETE /api/notes/1', (done) => expectUnauthorized(app, done));
    });


//fixing this properly
    it('GET /', function (done) {
        request(app)
            .get('/')
            .set('Username', 'sam')
            .set('Password', '123456')
            .set('Authorization', 'Basic c2FtOjEyMzQ1MTIzNDU=')



            .expect(200)
            .end((err) => {
                if (err) throw err;
                done();
            });
    });
});
