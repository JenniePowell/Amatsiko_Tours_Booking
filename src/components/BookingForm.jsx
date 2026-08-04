import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../auth/auth';
import "./BookingForm.css";

function BookingForm({ tour, onClose }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    travelDate: '',
    numberOfGuests: 1,
    notes: '',
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const response = await fetch("http://localhost:3001/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({
          tour_id: tour.id,
          travel_date: formData.travelDate,
          travellers: Number(formData.numberOfGuests),
        }),
      });

      if (!response.ok) {
        setError("Could not submit your booking. Please try again.");
        setSubmitting(false);
        return;
      }

      navigate("/my-bookings");
    } catch (err) {
      console.error(err);
      setError("Could not reach the server.");
      setSubmitting(false);
    }
  };

  return (
    <section className="booking-form-container">
      <div className="booking-form-header">
        <div>
          <h2>Book {tour.title}</h2>
          <p>{tour.location}</p>
        </div>

        {onClose && (
          <button
            type="button"
            className="close-button"
            onClick={onClose}
            aria-label="Close booking form"
          >
            ×
          </button>
        )}
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="travelDate">Preferred travel date</label>
        <input
          type="date"
          id="travelDate"
          name="travelDate"
          value={formData.travelDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="numberOfGuests">Number of guests</label>
        <input
          type="number"
          id="numberOfGuests"
          name="numberOfGuests"
          value={formData.numberOfGuests}
          onChange={handleChange}
          min="1"
          max="20"
          required
        />

        <label htmlFor="notes">Additional notes</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="4"
          placeholder="Tell us about any requirements or questions"
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit booking request"}
        </button>
      </form>
    </section>
  );
}

export default BookingForm;