let express = require('express');
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("assets"));

let server = app.listen(8888);

exports.appConfig = app;