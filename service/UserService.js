'use strict';


/**
 * Returns pet inventories by status
 * Returns a map of status codes to quantities
 *
 * userId String ID of user to return
 * returns Map
 **/
exports.getuser = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

