const express = require('express');
const queryParser = require('query-parser-express');
const { usersControler, phoneControler } = require('./controllers');
const { errorHandlers, validate, paginate } = require('./middleware');

const app = express();

app.use(express.json());

app.use(
  queryParser({
    parseBoolean: true, // default true
    parseNumber: true, // default true
  })
);

// POST /users body:{users}
// GET /users?page=1&results=5
// GET /users/1
// PATCH /users/1 body:{users}
// DELETE /users/1

// User
app.post('/users', validate.validationOnCreate, usersControler.createUser);
app.get('/users', paginate.paginateUsers, usersControler.getAllUsers);
app.get('/users/:userId', usersControler.getUserById);
app.patch('/users/:userId', usersControler.updateUserById);
app.delete('/users/:userId', usersControler.deleteUserById);

// Phone
app.post(
  '/phones',
  validate.validationOnCreatePhone,
  phoneControler.createPhone
);
app.get('/phones/:phoneId', phoneControler.getPhoneById);
app.patch('/phones/:phoneId', phoneControler.updatePhoneById);
app.get('/phones', paginate.paginatePhones, phoneControler.getAllPhone);
app.delete('/phones/:phoneId', phoneControler.deletePhoneById);

app.use(errorHandlers.errorHandler);

module.exports = app;
