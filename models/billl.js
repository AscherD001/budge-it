const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true},
  dueDate: { type: Date, required: true},
  explanation: String,
  date: { type: Date, default: Date.now }
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;
