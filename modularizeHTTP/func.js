const https = require('https');

const getHTTP = url => new Promise((resolve) => {
  https.get(url, (response) => {
    let dataString = '';
    response.setEncoding('utf8');
    response.on('data', (data) => {
      dataString += data;
    });
    response.on('end', () => {
      resolve(dataString);
    });
  });
});

module.exports = getHTTP;
