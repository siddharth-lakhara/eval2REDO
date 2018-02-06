const http = require('http');

const getHTTP = (url) => {
  http.get(url, (response) => {
    let dataString = '';
    response.setEncoding('utf8');
    response.on('data', (data) => {
      dataString += data;
    });
    response.on('end', () => {
      console.log(dataString);
    });
  });
};

module.exports = getHTTP;
