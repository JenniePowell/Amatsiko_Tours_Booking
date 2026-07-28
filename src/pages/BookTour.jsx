import { useParams, useNavigate, Link } from 'react-router-dom';
import { tours } from '../data/tours';
import BookingForm from '../components/BookingForm';

function BookTour() {
  const { tourId } = useParams();
  const navigate = useNavigate();

  const tour = tours.find((t) => String(t.id) === tourId);

  if (!tour) {
    return (
      <section>
        <h1>Tour not found</h1>
        <p>We couldn't find that tour.</p>
        <Link to="/">Back to tours</Link>
      </section>
    );
  }

  return <BookingForm tour={tour} onClose={() => navigate('/')} />;
}

export default BookTour;
