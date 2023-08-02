const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const bp = require("body-parser");

require("dotenv").config();

const PORT = process.env.PORT || 8087;

const app = express();
app.use(cors());
app.use(bp.json());

const Cat = require("./models/cat");
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  response.status(200).json("This is the home endpoint");
});

app.get("/cats", async (request, response) => {
  const allCats = await Cat.find(request.query); // request.query represents an empty object which is all the cats. You can pass it parameters to filter for certain cats.
  response.status(200).json(allCats);
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
