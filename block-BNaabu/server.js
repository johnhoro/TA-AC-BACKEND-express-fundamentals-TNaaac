var express = require(`express`);
var logger = require(`morgan`);
var cookieParser = require(`cookie-parser`);
var app = express();

app.use(logger(`dev`));

app.use((req, res, next) => {
  if (req.url === `admin`) {
    return next("unauthorized");
  } else {
    return next();
  }
});

app.get(`/`, (req, res) => {
  res.send(`Welcome to Express`);
});

app.get(`/about`, (req, res) => {
  res.send(`About Page`);
});

app.use((req, res, next) => {
  res.send(`Page is not Found`);
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log(`server listening on port 3k`);
});
