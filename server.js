const express = require ("express");
const hbs = require("hbs");


var app = express();
app.set ("view engine", "hbs");
app.use (express.static(__dirname + "public"));

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

app.get("/", (req,res) => {
  res.send("<h1>Hello Express</h1>");
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: 'Something bad happened'
  });
});

app.get("/billd", (req,res) => {
  res.render("billd", {myName: "Bill Desjarlais"});
});

app.listen(3000);
