// create a new router
const app = require("express").Router();

// import the models
const { Testimonial } = require("../models/index");

// Route to add a new testimonial
app.post("/", async (req, res) => {
  try {
    const { name, date, pfp, excerpt } = req.body;
    const testimonial = await Testimonial.create({ name, date, pfp, excerpt });

    res.status(201).json(testimonial);
  } catch (error) {
    res.status(500).json({ error: "Error adding testimonial" });
  }
});

// Route to get all testimonials
app.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll();

    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving testimonials", error });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving testimonial" });
  }
});

// Route to update a testimonial
app.put("/:id", async (req, res) => {
  try {
    const { name, date, pfp, excerpt } = req.body;
    const testimonial = await Testimonial.update(
      { name, date, pfp, excerpt },
      { where: { id: req.params.id } },
    );
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: "Error updating testimonial" });
  }
});

// Route to delete a testimonial
app.delete("/:id", async (req, res) => {
  try {
    const post = await Post.destroy({ where: { id: req.params.id } });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error deleting post" });
  }
});

// export the router
module.exports = app;
