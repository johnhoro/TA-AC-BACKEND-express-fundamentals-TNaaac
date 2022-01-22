var express = require(`express`);
var logger = require(`morgan`);

var app = express();

app.use(express.jason());
app.use(express.urlencoded({ extend: false }));

app.get(`/`, (req, res) => {
  res.sendFile(__dirname + `/index.html`);
});

app.get(`/new`, (req, res) => {
  res.sendFile(__dirname + `/new.html`);
});

app.use(`post`, (req, res) => {});

app.listen(2222, () => {
  console.log(`server listening on port 2222`);
});
