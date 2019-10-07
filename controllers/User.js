'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.getuser = function getuser (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  User.getuser(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
