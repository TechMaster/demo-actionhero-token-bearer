/**
 * Created by techmaster on 2/4/17.
 */
const db = require('../db');

module.exports = {

  initialize: function (api, next) {
    const authenticationMiddleware = {
      name: 'token-authentication',
      global: false,
      preProcessor: function (data, next) {
        if (data.actionTemplate.authenticated === true) {

          let token = data.connection.rawConnection.req.headers['authorization'];

          db.users.findByToken(token, (err, user) => {
            if (!user) {
              error = new Error('User is not found');
              next(error);
            } else {
              next();
            }

          });
        } else {
          next()
        }
      }
    };

    api.actions.addMiddleware(authenticationMiddleware);


    next()
  }
};
