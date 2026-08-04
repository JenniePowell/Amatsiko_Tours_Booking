const router = require("express").Router();
const { Booking, Tour } = require("../models");
const { authMiddleware } = require("../utils/auth");

router.get("/", authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { user_id: req.user.id },
      include: [{ model: Tour }],
    });

    res.status(200).json(bookings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error retrieving bookings" });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deleted = await Booking.destroy({
      where: {
        id: req.params.id,
        user_id: req.user.id,
      },
    });

    if (deleted === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking cancelled" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error cancelling booking" });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { tour_id, travel_date, travellers } = req.body;

    const booking = await Booking.create({
      user_id: req.user.id,
      tour_id,
      travel_date,
      travellers,
      total_price: 0,
    });

    res.status(201).json(booking);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error creating booking" });
  }
});

module.exports = router;