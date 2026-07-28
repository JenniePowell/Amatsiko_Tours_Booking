import tours from '../data/tours';
import TourCard from '../components/TourCard';
import "./Tours.css";
import africanPrint from "../assets/african-print.png";

function Tours() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Uganda</h1>
          <p>Authentic safaris and unforgettable adventures.</p>
        </div>
        <img src={africanPrint} className="hero-pattern"/>
      </section>

      <section className="tours-section">
        <h2>Explore our tours</h2>

        <div className="tour-grid">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Tours;