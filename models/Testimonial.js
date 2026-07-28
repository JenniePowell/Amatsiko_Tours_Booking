const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Testimonial extends Model {}

Testimonial.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Stored as a plain string to match the source data
    // e.g. "June 20, 2026"
    date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pfp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    excerpt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "testimonial",
    timestamps: false,
  }
);

module.exports = Testimonial;
