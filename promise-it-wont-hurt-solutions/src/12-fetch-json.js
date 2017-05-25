const HTTP = require('q-io/http');

const url = 'http://localhost:1337';

HTTP.read(url)
  .then((json) => {
    console.log(JSON.parse(json));
  })
  .then(null, console.log)
  .done();
