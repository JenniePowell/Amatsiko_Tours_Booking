import { useParams, useNavigate, Link } from 'react-router-dom';
import tours from '../data/tours';
import "./TourDetails.css";

function TourDetails() {
  const { tourId } = useParams();
  const navigate = useNavigate();

  const tour = tours.find((t) => String(t.id) === tourId);

  if (!tour) {
    return (
      <section className="tour-details-section">
        <h1>Tour not found</h1>
        <p>We couldn't find that tour.</p>
        <Link to="/tours">Back to tours</Link>
      </section>
    );
  }

  const handleBookClick = () => {
    navigate(`/tours/${tour.id}/book`);
  };

  return (
    <section className="tour-details-section">
      <img src={tour.image} alt={tour.title} className="tour-details-image" />

      <div className="tour-details-content">
        <h1>{tour.title}</h1>

        <p className="tour-detail">
          <i className="bi bi-geo-alt"></i>
          <span>{tour.location}</span>
        </p>

        <p className="tour-detail">
          <i className="bi bi-calendar3"></i>
          <span>{tour.duration}</span>
        </p>

        <p className="tour-details-description">{tour.description}</p>

        <p className="tour-price">{tour.price}</p>

        <button type="button" onClick={handleBookClick}>
          Book this tour
        </button>
      </div>
    </section>
  );
}

export default TourDetails;
