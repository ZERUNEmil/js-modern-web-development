var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require('cors');

// set cors option
var corsOptions = {
  origin: 'http://localhost',
}

var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable CORS for all routes in the given router
app.use("/api/users", cors(corsOptions), usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {  
  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});


module.exports = app;