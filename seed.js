const sequelize = require("../config/connection");
const { User, Tour, Booking, Testimonial } = require("./models");

const tourData = require("./tour.json");
const bookingData = require("./seeds/bookings.json");
const testimonialData = require("./seeds/testimonials.json");

const userData = [
  {
  username: "alice",
  firstName: "Alice",
  lastName: "Johnson",
  email: "alice@example.com",
  password: "password123",
},
{
  username: "bob",
  firstName: "Bob",
  lastName: "Smith",
  email: "bob@example.com",
  password: "password123",
},
{
  username: "charlie",
  firstName: "Charlie",
  lastName: "Brown",
  email: "charlie@example.com",
  password: "password123",
},
{
  username: "diana",
  firstName: "Diana",
  lastName: "Wilson",
  email: "diana@example.com",
  password: "password123",
},
{
  username: "ethan",
  firstName: "Ethan",
  lastName: "Taylor",
  email: "ethan@example.com",
  password: "password123",
},
{
  username: "fiona",
  firstName: "Fiona",
  lastName: "Davis",
  email: "fiona@example.com",
  password: "password123",
},
{
  username: "george",
  firstName: "George",
  lastName: "Miller",
  email: "george@example.com",
  password: "password123",
},
{
  username: "hannah",
  firstName: "Hannah",
  lastName: "Moore",
  email: "hannah@example.com",
  password: "password123",
},
{
  username: "isaac",
  firstName: "Isaac",
  lastName: "Anderson",
  email: "isaac@example.com",
  password: "password123",
},
{
  username: "jasmine",
  firstName: "Jasmine",
  lastName: "Thomas",
  email: "jasmine@example.com",
  password: "password123",
},
{
  username: "kevin",
  firstName: "Kevin",
  lastName: "Jackson",
  email: "kevin@example.com",
  password: "password123",
},
{
  username: "lily",
  firstName: "Lily",
  lastName: "White",
  email: "lily@example.com",
  password: "password123",
},
{
  username: "michael",
  firstName: "Michael",
  lastName: "Harris",
  email: "michael@example.com",
  password: "password123",
},
{
  username: "natalie",
  firstName: "Natalie",
  lastName: "Martin",
  email: "natalie@example.com",
  password: "password123",
},
{
  username: "oliver",
  firstName: "Oliver",
  lastName: "Thompson",
  email: "oliver@example.com",
  password: "password123",
},
{
  username: "paige",
  firstName: "Paige",
  lastName: "Garcia",
  email: "paige@example.com",
  password: "password123",
},
{
  username: "quinn",
  firstName: "Quinn",
  lastName: "Martinez",
  email: "quinn@example.com",
  password: "password123",
},
{
  username: "ryan",
  firstName: "Ryan",
  lastName: "Robinson",
  email: "ryan@example.com",
  password: "password123",
},
{
  username: "sophie",
  firstName: "Sophie",
  lastName: "Clark",
  email: "sophie@example.com",
  password: "password123",
},
{
  username: "thomas",
  firstName: "Thomas",
  lastName: "Lewis",
  email: "thomas@example.com",
  password: "password123",
},
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const usersToCreate = userData.map(({ username, ...fields }) => fields);
  await User.bulkCreate(usersToCreate, { individualHooks: true });

  await Tour.bulkCreate(tourData);

  await Booking.bulkCreate(bookingData);

  await Testimonial.bulkCreate(testimonialData);

  console.log("Database seeded!");
  console.log(`  ${usersToCreate.length} users`);
  console.log(`  ${tourData.length} tours`);
  console.log(`  ${bookingData.length} bookings`);
  console.log(`  ${testimonialData.length} testimonials`);
  console.log("\nSample logins:");
  userData.forEach((u) => console.log(`  ${u.email} / ${u.password}`));

  process.exit(0);
};

seedDatabase();
