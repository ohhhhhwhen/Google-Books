var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Link = require("./models/links");

var app = express();

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(
  "mongodb://owenchan:uw2020@ds233167.mlab.com:33167/heroku_75v3c8j2"
);

app.get("/get-links", function(req, res) {
  var links = Link.find({});
  console.log(links);
  res.json(links);
});

app.post("/save-link", function(req, res) {
  Link.create({
    title: req.body.title,
    authors: req.body.authors,
    bookImg: req.body.imageLinks,
    description: req.body.description,
    link: req.body.previewLink
  })
    .then(links => {
      console.log(links);
      res.json(links);
    })
    .catch(function(err) {
      console.log(err);
    });

  res.end();
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Express app listening on port " + port);
});
