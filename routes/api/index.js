const router = require("express").Router();
const billRoutes = require("./bill");
const budgetRoutes = require("./budget");
const balanceRoutes = require("./balance");


// Book routes
router.use("/bill", billRoutes);
router.use("/budget", budgetRoutes);
router.use("/balance", balanceRoutes);

module.exports = router;
