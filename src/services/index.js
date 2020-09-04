const users = require('./users/users.service.js');
const ideas = require('./ideas/ideas.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(ideas);
};
