const express = require("express");

// express app
const app = express();

//connect to mongodb
const dbURI =
  "mongodb+srv://<username>:<password>@cluster0.nv9au.mongodb.net/?retryWrites=true&w=majority";

// listen for requests
app.listen(8000);

app.get("/", (req, res) => {
  res.send("<p>Home page</>");
});

app.get("/about", (req, res) => {
  res.send("<p>About page</>");
});

//redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page
app.use((req, res) => {
  res.status(404).send("<h1>404 Page OOPS bro</h1>");
});
