// const server = require('../src/server');
const http = require('http');

test('Server is working ', (done) => {
  http.get('http://localhost:8080/', (response) => {
    expect(response.statusCode).toBe(200);
    response.on('data', () => {
      done();
    });
  });
});

test('Home page response with promise', (done) => {
  let dataString = '';
  http.get('http://localhost:8080/', (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      dataString += data;
    });
    response.on('end', () => {
      expect(dataString).toEqual('working with promise');
      done();
    });
  });
});
