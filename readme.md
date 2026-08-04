# Amatsiko Tours — Booking App

A full-stack tour booking application for Amatsiko Tours. Users can browse tours, register and log in, book a tour, view their bookings, and cancel them.

**Tech stack:** React + Vite (frontend), Node.js + Express + Sequelize (backend), MySQL (database), JWT authentication.

---

**Note:** This project has **two** `package.json` files — one for the frontend (root) and one for the backend (`server/`). You install and run them separately.

---

## Prerequisites

Before you start, make sure you have these installed:

- **Node.js** v24 recommended — built and tested on v24.18.0
- **MySQL** v8 with a running MySQL server.
- **MySQL root password** please have your password ready, if you made one.

---

## Setup

### 1. Clone the repo

```bash
git clone <https://github.com/JenniePowell/Amatsiko_Tours_Booking.git>
cd Amatsiko_Tours_Booking
```

### 2. Create the database

Open MySQL in a terminal (enter your password when prompted):

```bash
mysql -u root -p
```

Then run the schema file to create the database, and exit:

```sql
source server/db/schema.sql;
quit;
```

### 3. Set up backend environment variables

The backend needs a `.env` file with your database credentials.

**Copy the `.env.example` file** and rename it to `.env`, then update the values (DB_PASSWORD, SECRET_KEY).

```bash
# Copy the example env file
cp server/.env.example server/.env
```

Your `server/.env` should contain:
```
SECRET_KEY=
DB_DATABASE=tours_db
DB_USERNAME=root
DB_PASSWORD= "Your MySQL Password"
DB_HOST=localhost
DB_DIALECT=mysql
DB_PORT=3306
DB_PORT=3306
```
To generate a random string for a **SECRET_KEY** use:

```bash      
node -e "console.log(require('crypto').randomBytes(12).toString('hex'))"
```      


### 4. Install backend dependencies and seed the database

```bash
cd server
npm install
npm run seed
```

You should see `Database seeded!` followed by counts (20 users, 27 tours, etc.) and a list of sample logins.

### 5. Install frontend dependencies

Open a **second terminal**, go back to the project root, and install:

```bash
cd .. (if you are still in server)
npm install
```

---

## Running the app

You need **two terminals running at the same time** — one for the backend, one for the frontend.

**Terminal 1 — backend** (from the `server/` folder):

```bash
cd server
npm run dev
```

Wait for `Now listening`. The API runs on **http://localhost:3001**.

**Terminal 2 — frontend** (from the project root):

```bash
npm run dev
```

Vite runs on **http://localhost:5173**. Open that in your browser.

---

## Sample logins

The seed creates 20 test users. Any of these work (all use the same password):

- **Email:** `alice@example.com` — **Password:** `password123`
- `bob@example.com` / `password123`
- ...and 18 more (alice through thomas). See the seed output for the full list.

`alice@example.com` has an existing booking, so log in as alice to see the "My Bookings" page populated.

You can also register a brand-new account via the **Register** page.

---

## Features

- Browse tours and view tour details
- Register / log in / log out (JWT authentication)
- Book a tour (login required)
- View your own bookings ("My Bookings")
- Cancel a booking
- Contact, About, Gallery, and How to Book pages

---

## Troubleshooting

**"Could not reach the server" on login/booking**
The backend isn't running, or isn't running in its own terminal. Make sure Terminal 1 shows `Now listening`. Both servers must run at the same time in separate terminals.

**"Please update the .env file with your database password"**
Your `server/.env` is missing or `DB_PASSWORD` is wrong. Copy `server/.env.example` to `server/.env` and set your real MySQL password.

**"Access denied for user 'root'@'localhost'"**
The password in `server/.env` doesn't match your actual MySQL root password.

**Seed fails / can't connect to database**
Make sure MySQL is running and you ran `source server/db/schema.sql;` to create the `tours_db` database.

**Need fresh test data**
Re-run `npm run seed` from the `server/` folder. This resets all tables to the seeded state.