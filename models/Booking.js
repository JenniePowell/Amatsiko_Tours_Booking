const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Booking extends Model {}

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    tour_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tour",
        key: "id",
      },
    },
    travel_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    travellers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "booking",
    timestamps: false,
  }
);

module.exports = Booking;
