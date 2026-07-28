import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Tours from "./pages/Tours";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyBookings from "./pages/MyBookings";
import BookTour from "./pages/BookTour";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
      <div className="app">
        <Nav />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Tours />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/tours/:tourId/book"
              element={
                <ProtectedRoute>
                  <BookTour />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-bookings"
              element={
                <ProtectedRoute>
                  <MyBookings />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
  );
}

export default App;