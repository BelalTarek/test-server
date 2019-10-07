'use strict';

var utils = require('../utils/writer.js');
var App = require('../service/AppService');

module.exports.getAppLayout = function getAppLayout (req, res, next) {
  App.getAppLayout()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
