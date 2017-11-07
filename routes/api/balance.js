const router = require("express").Router();
const budgetController = require("../../controllers/budgetController");

// Matches with "/api/balance"
router.route("/")
  .post(budgetController.update);

module.exports = router;
