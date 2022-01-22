var express = require(`express`);

//require
var logger = require(`morgan`);
var cookieParser = require(`cookie-parser`);
var app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.use(logger(`dev`));
app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie("username", "xyz");
  next();
});

//routes
app.get(`/`, (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get(`/about`, (req, res) => {
  res.send(`My name is John`);
});

app.post(`/form`, (req, res) => {
  res.json(req.body);
});

app.post(`/json`, (req, res) => {
  console.log(req.body);
});

app.get(`/users/:username`, (req, res) => {
  var username = req.params.username;
  res.send(`<h2>${username} </h2>`);
});

//404 middleware
app.use((req, res, next) => {
  res.send(`Page Not Found`);
});

//custom middleware
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(4000, () => {
  console.log(`server listening on port 4k`);
});
