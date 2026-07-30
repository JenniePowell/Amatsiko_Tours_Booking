import { useNavigate } from 'react-router-dom';
import "./TourCard.css";


function TourCard({ tour }) {
    const navigate = useNavigate();

    const handleViewClick = () => {
        navigate(`/tours/${tour.id}`);
    };

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

                <p className='tour-price'>{tour.price}</p>

                <button type="button" onClick={handleViewClick}>View this tour</button>
            </div>
        </article>
    );
}

export default TourCard;