const User = require("./User");
const Tour = require("./Tour");
const Booking = require("./Booking");
const Testimonial = require("./Testimonial");

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
