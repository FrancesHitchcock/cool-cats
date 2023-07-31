const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Cat = require("./models/cat");

async function seed() {
  await Cat.create({
    name: "Felix",
    color: "Grey and white",
    hasClaws: true,
    likes: ["sleeping", "sipping milk", "climbing trees"],
  });
  await Cat.create({
    name: "Cedric",
    color: "Ginger",
    hasClaws: false,
    likes: ["fighting in the street", "extreme ironing", "eating trash"],
  });
  console.log("Go, kitty go");
  mongoose.disconnect();
}

seed();
