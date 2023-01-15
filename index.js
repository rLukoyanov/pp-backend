const express = require("express");
const app = express();
const port = 3000;

const rating = require("./rating");
const offers = require("./offers");
const responses = require("./responses");

app.route("/").get(() => {});
app.route("/rating").get(rating.sendRating);
app.route("/offers").get(offers.sendOffers);
app.route("/responses").get(responses.sendResponses);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
