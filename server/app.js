'use strict';
const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const routes = require('./routes');
const axios = require('axios');
const app = express();

app.use(middleware.morgan('dev'));
app.use(middleware.cookieParser());
app.use(middleware.bodyParser.urlencoded({extended: false}));
app.use(middleware.bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(middleware.auth.session);
app.use(middleware.auth.initializeAuthentication);

app.use(express.static(path.join(__dirname, '../public')));


app.use('/', routes.auth);
app.use('/authenticated', routes.auth);
app.use('/api', routes.api);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
app.use('/api/message', routes.messages);
app.use('/api/profiles', routes.profiles);
=======
console.log('after app use /api ');

app.use('/api/message', routes.messages);
console.log('after app use /api/message');

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// for all messages. goes to the routes messages.js '/'
<<<<<<< HEAD
>>>>>>> comment added for the messages routes
=======
>>>>>>> comment added for the messages routes
=======
// for all messages. goes to the routes messages.js '/'
>>>>>>> comment added for the messages routes
=======

console.log('after app use /api ');

app.use('/api/message', routes.messages);
console.log('after app use /api/message');

<<<<<<< HEAD
// for all messages. goes to the routes messages.js '/'
>>>>>>> app minor change
app.use('/api/messages', routes.messages);
=======
=======
>>>>>>> merge conflict resolved
app.use('/api/thread', routes.thread);
console.log('after app use /api/thread');

>>>>>>> mail read view pulls thread data from DB
=======

=======

console.log('after app use /api ');

// for an individual message. goes to the route messages.js '/:id'
app.use('/api/message', routes.messages);
console.log('after app use /api/message');

>>>>>>> 1a3d5d53f04c3dac5e3fd66892c52d7df66ebdf3
app.use('/api/thread', routes.thread);
console.log('after app use /api/thread');


<<<<<<< HEAD
>>>>>>> new routes implemented
=======
>>>>>>> 1a3d5d53f04c3dac5e3fd66892c52d7df66ebdf3
app.use('/api/profiles', routes.profiles);
app.use('/api/folders', routes.folders);
app.use('/api/search', routes.search);


module.exports = app;
