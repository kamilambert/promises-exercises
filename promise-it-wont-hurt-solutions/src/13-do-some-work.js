const HTTP = require('q-io/http');

const sessionCache = 'http://localhost:7000';
const database = 'http://localhost:7001/';

HTTP.read(sessionCache)
  .then(data => data.toString('utf-8'))
  .then(userID => HTTP.read(database + userID))
  .then(user => JSON.parse(user))
  .then(console.log)
  .done();
