// const server = require('../src/server');
const http = require('http');

test('Server is working ', (done) => {
  http.get('http://localhost:8080/', (response) => {
    expect(response.statusCode).toBe(201);
    response.on('data', () => {
      done();
    });
  });
});
