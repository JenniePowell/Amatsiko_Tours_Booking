const Tour = require("./tour");
const User = require("./user");

const Booking = require("./booking");
const Testimonial = require("./testimonial");

User.hasMany(Booking, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Booking.belongsTo(User, {
  foreignKey: "user_id",
});

Tour.hasMany(Booking, {
  foreignKey: "tour_id",
  onDelete: "CASCADE",
});
Booking.belongsTo(Tour, {
  foreignKey: "tour_id",
});

module.exports = { User, Tour, Booking, Testimonial };