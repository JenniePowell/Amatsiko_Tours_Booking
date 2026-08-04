import { useEffect, useState } from "react";
import { getToken } from "../auth/auth";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await fetch("http://localhost:3001/api/bookings", {
          headers: { Authorization: `Bearer ${getToken()}` },
        });

        if (!response.ok) {
          setError("Could not load your bookings.");
          return;
        }

        const data = await response.json();
        setBookings(data);
      } catch (err) {
        console.error(err);
        setError("Could not reach the server.");
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  const handleCancel = async (bookingId) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );
    if (!confirmed) return;

    try {
      const response = await fetch(
        `http://localhost:3001/api/bookings/${bookingId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );

      if (!response.ok) {
        setError("Could not cancel the booking.");
        return;
      }

      setBookings((current) => current.filter((b) => b.id !== bookingId));
    } catch (err) {
      console.error(err);
      setError("Could not reach the server.");
    }
  };

  return (
    <section style={{ maxWidth: "800px", margin: "40px auto", padding: "0 1rem" }}>
      <h1>My Bookings</h1>

      {loading && <p>Loading your bookings...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && bookings.length === 0 && (
        <p>You don't have any bookings yet.</p>
      )}

      {!loading && !error && bookings.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {bookings.map((booking) => (
            <li
              key={booking.id}
              style={{
                background: "white",
                borderRadius: "8px",
                padding: "1rem 1.25rem",
                marginBottom: "1rem",
                boxShadow: "0 2px 8px rgb(0 0 0 / 8%)",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>
                {booking.tour ? booking.tour.title : "Tour"}
              </h3>
              <p>Travel date: {booking.travel_date}</p>
              <p>Travellers: {booking.travellers}</p>
              <p>Total price: ${booking.total_price}</p>
              <button type="button" onClick={() => handleCancel(booking.id)}>
                Cancel Booking
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default MyBookings;