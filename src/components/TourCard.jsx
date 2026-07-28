import { useState } from 'react';
import BookingForm from './BookingForm';
import "./TourCard.css";


function TourCard({ tour }) {
    const [showBookingForm, setShowBookingForm] = useState(false);

    return (
        <article className="tour-card">
            <img src={tour.image} alt={tour.title} />
        
            <div className="tour-card-content">
                <h2>{tour.title}</h2>

                <p>{tour.location}</p>
                <p>{tour.duration}</p>
                <p>{tour.description}</p>

                <p><strong>£{tour.price}</strong></p>

                <button type="button" onClick={() => setShowBookingForm(true)}>Book this tour</button>
            
            {showBookingForm && (
                <BookingForm tour={tour} onClose={() => setShowBookingForm(false)}/>
        )}
            
            </div>
        </article>
    );
}

export default TourCard;