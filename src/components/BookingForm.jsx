import { useState } from 'react';
import "./BookingForm.css";


function BookingForm({ tour, onClose }) {
    const [formData, setFormData] = useState({
        travelDate: '',
        numberOfGuests: 1,
        notes: '',
    });

const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const booking = {
      tourId: tour.id,
      tourTitle: tour.title,
      ...formData,
      numberOfGuests: Number(formData.numberOfGuests),
    };

    console.log('Booking submitted:', booking);
    alert(`Booking request submitted for ${tour.title}`);
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

        <button type="submit">Submit booking request</button>
      </form>
    </section>
  );
}

export default BookingForm;