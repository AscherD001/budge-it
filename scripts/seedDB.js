const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/testdb",
  {
    useMongoClient: true
  }
);

const billSeed = [
  {
    name: "Groceries Bill",
    amount: "600.00",
    category: "Essentials",
    dueDate: "12/01",
    explanation: "50 extra for Thankgsgiving Feast."
  },
  {
    name: "Gas Bill",
    amount: "600.00",
    dueDate: "11/13",
    category: "Expense",
    explanation: "N/A"
  },
  
];

db.Bill
  .remove({})
  .then(() => db.Bill.collection.insertMany(billSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
