const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')({ exposedHeaders: ['X-ResponseTime']});
// Run the app by serving the static files
// in the dist directory
app.use(cors);
app.options('*', cors);
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8089);

// PathLocationStrategy

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log('Console listening!');