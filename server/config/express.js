const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cors = require('cors');

module.exports = function () {
  var app = express();
  
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({"extended": "true"}));
  app.use(expressValidator());

  consign().include('routes').then('persistence').then('services').into(app);

  return app;
}
