import { useMemo, useState } from "react";
import tours from '../data/tours';
import TourCard from '../components/TourCard';
import "./Tours.css";
import africanPrint from "../assets/african-print.png";

function Tours() {
  const [selectedType, setSelectedType] = useState("");

  const tourTypes = useMemo(
    () => [...new Set(tours.map((tour) => tour.type))].sort(),
    []
  );

  const filteredTours = selectedType
    ? tours.filter((tour) => tour.type === selectedType)
    : tours;

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Explore Tours</h1>
          <p>Authentic safaris and unforgettable adventures</p>
        </div>
        <img src={africanPrint} className="hero-pattern"/>

    <div className="custom-shape-divider-bottom-1785438866">
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
      className="shape-fill"
    />
  </svg>
</div>
      
      </section>

      <section className="tours-section">
        <h2>Explore our tours</h2>

        <div className="tours-layout">
          <aside className="tours-filters">
            <h3>
              <i className="bi bi-briefcase"></i> Tour type
            </h3>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">Select...</option>
              {tourTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </aside>

          <div className="tours-results">
            <p className="results-count">
              Showing {filteredTours.length} of {tours.length} tours
            </p>

            <div className="tour-list">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tours;