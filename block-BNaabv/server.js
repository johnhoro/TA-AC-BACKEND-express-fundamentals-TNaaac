var express = require(`express`);
var app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get(`/`, (req, res) => {
  res.send(`Welcome to Express`);
});

app.get(`/about`, (req, res) => {
  res.send(`My name is John`);
});

app.post(`/form`, (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.post(`/json`, (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log(`server listening on port 3k`);
});
