// create a new router
const app = require("express").Router();

// import the models
const { Tour } = require("../models/index");

// Route to add a new post
app.post("/", async (req, res) => {
  try {
    const { title, description, duration, location, price } = req.body;
    const tour = await Tour.create({
      title,
      description,
      duration,
      location,
      price,
    });

    res.status(201).json(tour);
  } catch (error) {
    res.status(500).json({ error: "Error adding tour" });
  }
});

// Route to get all posts
app.get("/", async (req, res) => {
  try {
    const tour = await Tour.findAll();

    res.json(tour);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving tour", error });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.id);
    res.json(tour);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving tour" });
  }
});

// Route to update a tour
app.put("/:id", async (req, res) => {
  try {
    const { title, description, duration, location, price } = req.body;
    const tour = await Tour.update(
      { title, description, duration, location, price },
      { where: { id: req.params.id } },
    );
    res.json(tour);
  } catch (error) {
    res.status(500).json({ error: "Error updating tour" });
  }
});

// Route to delete a tour
app.delete("/:id", async (req, res) => {
  try {
    const tour = await Tour.destroy({ where: { id: req.params.id } });
    res.json(tour);
  } catch (error) {
    res.status(500).json({ error: "Error deleting tour" });
  }
});

// export the router
module.exports = app;
