import { useNavigate } from 'react-router-dom';
import "./TourCard.css";

// Breaks the long-form description into short bullet highlights
function getHighlights(description) {
  return description
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => item.replace(/^and /i, "").replace(/\.$/, ""))
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1));
}

function TourCard({ tour }) {
    const navigate = useNavigate();
    const highlights = getHighlights(tour.description);

    const handleViewClick = () => {
        navigate(`/tours/${tour.id}`);
    };

    return (
        <article className="tour-row">
            <div className="tour-row-image">
                <img src={tour.image} alt={tour.title} />
            </div>

            <div className="tour-row-content">
                <div className="tour-row-header">
                    <h3>{tour.title}</h3>
                    <span className="tour-price">{tour.price}</span>
                </div>

                <p className="tour-detail">
                    <i className="bi bi-geo-alt"></i>
                    <span>{tour.location}</span>
                </p>

                <p className="tour-detail">
                    <i className="bi bi-calendar3"></i>
                    <span>{tour.duration}</span>
                </p>

                <ul className="tour-highlights">
                    {highlights.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <button type="button" onClick={handleViewClick}>
                    View this trip
                </button>
            </div>
        </article>
    );
}

export default TourCard;