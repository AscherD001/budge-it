const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true},
  test: { type: Number},
  date: { type: Date, default: Date.now },
  // balance: { type: String, required: true },
  userId: { type: String, required: true},
  temp: {type: Number}
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;