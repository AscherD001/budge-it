const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true},
  date: { type: Date, default: Date.now },
  balance: { type: String, required: true }
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;