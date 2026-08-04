const router = require("express").Router();

const tourRoutes = require("./tour");
const testimonialRoutes = require("./testimonial");
const userRoutes = require("./user");

router.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

router.use("/api/tours", tourRoutes);
router.use("/api/users", userRoutes);
router.use("/api/testimonials", testimonialRoutes);
router.use("/api/bookings", bookingRoutes);

module.exports = router;
