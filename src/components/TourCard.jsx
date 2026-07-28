import { useState } from 'react';
import BookingForm from './BookingForm';
import "./TourCard.css";


function TourCard({ tour }) {
    const [showBookingForm, setShowBookingForm] = useState(false);

    return (
        <article className="tour-card">
            <img src={tour.image} alt={tour.title} className="tour-image" />
        
            <div className="tour-card-content">
                <h3>{tour.title}</h3>

                <p className='tour-detail'>
                    <i className="bi bi-geo-alt"></i>
                    <span>{tour.location}</span></p>

                <p className='tour-detail'>
                    <i className="bi bi-calendar3"></i>
                    <span>{tour.duration}</span></p>

                <p className='tour-description'>{tour.description}</p>

                <p className='tour-price'>£{tour.price}</p>

                <button type="button" onClick={() => setShowBookingForm(true)}>Book this tour</button>
            
            {showBookingForm && (
                <BookingForm tour={tour} onClose={() => setShowBookingForm(false)}/>
        )}
            
            </div>
        </article>
    );
}

export default TourCard;