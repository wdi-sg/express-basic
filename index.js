console.log("about to require express");

const express = require('express');

const app = express();
console.log("done creating app");

app.get('/apple', (request, response) => {

  console.log("hey we got a request! yay.");

  response.send( "hi from aws and stuff" );

})

const port = parseInt( process.argv[2] );

console.log("start listening");

app.listen(port, ()=> {
  console.log("now we're listening");
})

console.log("done listening");