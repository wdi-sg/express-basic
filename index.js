console.log("about to require express");
const express = require('express');

const app = express();
console.log("done creating app");

app.get('/apple', (request, response) => {
  response.send( "hi from aws and stuff" );
})

const port = parseInt( process.argv[2] );
console.log("start listening");
app.listen(port)
console.log("done listening");
