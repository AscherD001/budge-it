const router = require("express").Router();
const billController = require("../../controllers/billController");

// Matches with "/api/books"
router.route("/")
  .get(billController.findAll)
  .post(billController.create);

// Matches with "/api/bill/:id"
router
  .route("/:id")
  .get(billController.findById)
  .put(billController.update)
  .delete(billController.remove);

module.exports = router;
