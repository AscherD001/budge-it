const router = require("express").Router();
const billRoutes = require("./bill");

// Book routes
router.use("/bill", billRoutes);

module.exports = router;
