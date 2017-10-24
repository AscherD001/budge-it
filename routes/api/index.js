const router = require("express").Router();
const bookRoutes = require("./bill");

// Book routes
router.use("/bill", billRoutes);

module.exports = router;
