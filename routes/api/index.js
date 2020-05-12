const router = require("express").Router();
const bookRoutes = require("./googleBooks");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
