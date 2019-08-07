const path = require("path");
const router = require("express").Router();
const jobRoutes = require("./jobRoutes");

// Book routes
router.use("/jobs", jobRoutes);

// render the html page for all others
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
