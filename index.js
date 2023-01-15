const express = require("express");
const app = express();
const port = 3000;

const rating = require("./rating");
const offers = require("./offers");
const responses = require("./responses");
const profile = require("./profile");

app.route("/").get(() => {});
app.route("/rating").get(rating.sendRating);
app.route("/offers").get(offers.sendOffers);
app.route("/responses").get(responses.sendResponses);
app.route("/profile").get(profile.sendProfile);
app.route("/profile/achieves").get(profile.sendAchieves);
app.route("/profile/workExp").get(profile.sendWorkExp);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
