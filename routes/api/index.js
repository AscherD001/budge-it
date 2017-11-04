const router = require("express").Router();
const billRoutes = require("./bill");
const budgetRoutes = require("./budget");

// Book routes
router.use("/bill", billRoutes);
router.use("/budget", budgetRoutes);

module.exports = router;
