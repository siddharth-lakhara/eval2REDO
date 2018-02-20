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

test('Able to connect to API 1', (done) => {
  http.get('http://localhost:8080/books', (response) => {
    expect(response.statusCode).toBe(200);
    response.on('data', () => {
      done();
    });
  });
});

test('Verify data from API 1', (done) => {
  let dataString = '';
  let dataObject = {};

  const verifyJSON = {
    books: [{
      Author: 'J K Rowling',
      id: 1,
      Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
    }, {
      Author: 'J K Rowling',
      id: 2,
      Name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)',
    }, {
      Author: 'Sidney Sheldon',
      id: 8,
      Name: 'If Tomorrow Comes (Tracy Whitney Series, #1)',
    }, {
      Author: 'Sidney Sheldon',
      id: 10,
      Name: 'Tell Me Your Dreams',
    }, {
      Author: 'J K Rowling',
      id: 3,
      Name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)',
    }, {
      Author: 'J K Rowling',
      id: 4,
      Name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)',
    }, {
      Author: 'Sidney Sheldon',
      id: 9,
      Name: 'Master of the Game',
    }, {
      Author: 'Sidney Sheldon',
      id: 11,
      Name: 'The Other Side of Midnight (Midnight #1)',
    }, {
      Author: 'J K Rowling',
      id: 5,
      Name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)',
    }, {
      Author: 'J K Rowling',
      id: 6,
      Name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)',
    }, {
      Author: 'J K Rowling',
      id: 7,
      Name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)',
    }, {
      Author: 'Sidney Sheldon',
      id: 12,
      Name: 'Rage of Angels',
    }],
  };

  http.get('http://localhost:8080/books', (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      dataString += data;
    });
    response.on('end', () => {
      dataObject = JSON.parse(dataString);
      expect(dataObject.data).toEqual(verifyJSON);
      done();
    });
  });
});

test('Able to connect to API 2 - id 1', (done) => {
  http.get('http://localhost:8080/ratings/1', (response) => {
    expect(response.statusCode).toBe(200);
    response.on('data', () => {
      done();
    });
  });
});

test('Verify data from API 2 - id 1', (done) => {
  let dataString = '';
  let dataObject = {};
  const verifyJSON = {
    rating: 4.45,
  };

  http.get('http://localhost:8080/ratings/1', (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      dataString += data;
    });
    response.on('end', () => {
      dataObject = JSON.parse(dataString);
      expect(dataObject).toEqual(verifyJSON);
      done();
    });
  });
});

test('Able to connect to API 2 - id 5', (done) => {
  http.get('http://localhost:8080/ratings/5', (response) => {
    expect(response.statusCode).toBe(200);
    response.on('data', () => {
      done();
    });
  });
});

test('Verify data from API 2 - id 5', (done) => {
  let dataString = '';
  let dataObject = {};
  const verifyJSON = {
    rating: 4.47,
  };

  http.get('http://localhost:8080/ratings/5', (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      dataString += data;
    });
    response.on('end', () => {
      dataObject = JSON.parse(dataString);
      expect(dataObject).toEqual(verifyJSON);
      done();
    });
  });
});

test('Able to connect to api data combiner url', (done) => {
  http.get('http://localhost:8080/getall', (response) => {
    expect(response.statusCode).toBe(200);
    response.on('data', () => {
      done();
    });
  });
});

test('Got all data from getAll', (done) => {
  let dataString = '';
  let dataObject = {};

  const verifyJSON = {
    books: [
      {
        Author: 'J K Rowling',
        id: 1,
        Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
        rating: 4.45,
      },
      {
        Author: 'J K Rowling',
        id: 2,
        Name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)',
        rating: 4.38,
      },
      {
        Author: 'Sidney Sheldon',
        id: 8,
        Name: 'If Tomorrow Comes (Tracy Whitney Series, #1)',
        rating: 4.02,
      },
      {
        Author: 'Sidney Sheldon',
        id: 10,
        Name: 'Tell Me Your Dreams',
        rating: 3.93,
      },
      {
        Author: 'J K Rowling',
        id: 3,
        Name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)',
        rating: 4.54,
      },
      {
        Author: 'J K Rowling',
        id: 4,
        Name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)',
        rating: 4.53,
      },
      {
        Author: 'Sidney Sheldon',
        id: 9,
        Name: 'Master of the Game',
        rating: 4.1,
      },
      {
        Author: 'Sidney Sheldon',
        id: 11,
        Name: 'The Other Side of Midnight (Midnight #1)',
        rating: 3.9,
      },
      {
        Author: 'J K Rowling',
        id: 5,
        Name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)',
        rating: 4.47,
      },
      {
        Author: 'J K Rowling',
        id: 6,
        Name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)',
        rating: 4.54,
      },
      {
        Author: 'J K Rowling',
        id: 7,
        Name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)',
        rating: 4.62,
      },
      {
        Author: 'Sidney Sheldon',
        id: 12,
        Name: 'Rage of Angels',
        rating: 3.92,
      },
    ],
  };

  http.get('http://localhost:8080/getall', (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      dataString += data;
    });
    response.on('end', () => {
      dataObject = JSON.parse(dataString);
      expect(dataObject).toEqual(verifyJSON);
      done();
    });
  });
});
