import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import tours from '../data/tours';
import "./TourDetails.css";

function TourDetails() {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [galleryIndex, setGalleryIndex] = useState(0);

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

  const gallery = tour.gallery && tour.gallery.length ? tour.gallery : [tour.image];

  const showPrevImage = () =>
    setGalleryIndex((i) => (i === 0 ? gallery.length - 1 : i - 1));
  const showNextImage = () =>
    setGalleryIndex((i) => (i === gallery.length - 1 ? 0 : i + 1));

  return (
    <>
      <section className="tour-hero">
        <div className="tour-hero-layout">
          <div className="tour-hero-main">
            <h1>{tour.title}</h1>

            {tour.intro
              ? tour.intro.map((paragraph, i) => <p key={i}>{paragraph}</p>)
              : <p>{tour.description}</p>}

            {gallery.length > 0 && (
              <div className="tour-gallery">
                <button
                  type="button"
                  className="gallery-arrow gallery-arrow-left"
                  onClick={showPrevImage}
                  aria-label="Previous image"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>

                <img
                  src={gallery[galleryIndex]}
                  alt={`${tour.title} photo ${galleryIndex + 1}`}
                  className="tour-gallery-image"
                />

                <button
                  type="button"
                  className="gallery-arrow gallery-arrow-right"
                  onClick={showNextImage}
                  aria-label="Next image"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>

                <div className="gallery-dots">
                  {gallery.map((_, i) => (
                    <span
                      key={i}
                      className={`gallery-dot ${i === galleryIndex ? "active" : ""}`}
                      onClick={() => setGalleryIndex(i)}
                    ></span>
                  ))}
                </div>
              </div>
            )}

            {tour.faqs && (
              <div className="tour-faqs">
                {tour.faqs.map((faq, i) => (
                  <details key={i} className="tour-faq">
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            )}
          </div>

          <aside className="tour-hero-sidebar">
            <div className="tour-overview-box">
              <h3>{tour.title} Overview</h3>

              <div className="tour-overview-icons">
                <div>
                  <i className="bi bi-tag"></i>
                  <h4>Price</h4>
                  <p>{tour.price}</p>
                </div>
                <div>
                  <i className="bi bi-cup-hot"></i>
                  <h4>Meals</h4>
                  <p>{tour.meals || "As specified"}</p>
                </div>
                <div>
                  <i className="bi bi-calendar-check"></i>
                  <h4>Best Time</h4>
                  <p>{tour.bestTime || "All Year Round"}</p>
                </div>
              </div>
            </div>

            {tour.included && (
              <div>
                <h3 className="sidebar-heading">Included</h3>
                <ul className="sidebar-list">
                  {tour.included.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            )}

            {tour.excluded && (
              <div>
                <h3 className="sidebar-heading">Excluded</h3>
                <ul className="sidebar-list">
                  {tour.excluded.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            )}

            {tour.goodToKnow && (
              <div className="good-to-know-box">
                <h3 className="sidebar-heading">Good to know</h3>
                <p>{tour.goodToKnow}</p>
              </div>
            )}

            <button type="button" className="sidebar-book-btn" onClick={handleBookClick}>
              Book this tour
            </button>
          </aside>
        </div>
      </section>

      {(tour.itinerary || tour.highlights || tour.packingTip) && (
        <section className="tour-lower-section">
          {tour.itinerary && (
            <div className="tour-itinerary">
              <h2>Itinerary</h2>
              <ul>
                {tour.itinerary.map((stop, i) => (
                  <li key={i}>
                    <strong>{stop.day}:</strong> {stop.text}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="tour-lower-grid">
            {tour.highlights && (
              <div className="tour-highlights-box">
                <h3>Highlights</h3>
                <ul>
                  {tour.highlights.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            )}
            
          </div>
        </section>
      )}
       <section className="tour-cta-banner">
        <div className="tour-cta-content">
          <h2>Ready To Create Memories That Last A Lifetime?</h2>
          <p>You can customize your trip. Our sample itineraries are adjustable to your preferences. Our specialists work with you to create your dream journey!</p>
        </div>
        <button type="button" className="tour-cta-btn" onClick={handleBookClick}>
          Request this trip now
        </button>
      </section>
    </>
  );
}

export default TourDetails;