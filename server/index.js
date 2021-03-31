const express = require('express');
const bodyParser = require('body-parser');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

let port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
