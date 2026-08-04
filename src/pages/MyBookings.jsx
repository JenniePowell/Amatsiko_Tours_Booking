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
  <section className="login-section">
    <div className="login-box bookings-box">
      <h1>My Bookings</h1>

      {loading && (
        <p className="bookings-message">Loading your bookings...</p>
      )}

      {error && (
        <p className="login-error" role="alert">
          {error}
        </p>
      )}

      {!loading && !error && bookings.length === 0 && (
        <div className="bookings-empty">
          <i className="bi bi-calendar2-x" aria-hidden="true"></i>
          <p>You don&apos;t have any bookings yet.</p>
        </div>
      )}

      {!loading && !error && bookings.length > 0 && (
        <ul className="bookings-list">
          {bookings.map((booking) => (
            <li className="booking-card" key={booking.id}>
              <h3>
                {booking.tour ? booking.tour.title : "Tour"}
              </h3>

              <div className="booking-details">
                <p>
                  <i className="bi bi-calendar-event" aria-hidden="true"></i>
                  <span>
                    <strong>Travel date:</strong> {booking.travel_date}
                  </span>
                </p>

                <p>
                  <i className="bi bi-people" aria-hidden="true"></i>
                  <span>
                    <strong>Travellers:</strong> {booking.travellers}
                  </span>
                </p>

                <p>
                  <i className="bi bi-cash-coin" aria-hidden="true"></i>
                  <span>
                    <strong>Total price:</strong> ${booking.total_price}
                  </span>
                </p>
              </div>

              <button
                className="cancel-booking-button"
                type="button"
                onClick={() => handleCancel(booking.id)}
              >
                Cancel Booking
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </section>
);
}

export default MyBookings;