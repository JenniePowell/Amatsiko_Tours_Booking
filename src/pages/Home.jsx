import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import tours from "../data/tours";
import { testimonials } from "../data/testimonials";
import localGalleryImages from "../data/localsImages.js";
import safariHero from "../assets/safari.jpg";
import gorillaImg from "../assets/gorilla.jpg";
import Locals from "../assets/locals.jpeg";
import waterSafariImg from "../assets/water-safari.jpg";
import giraffesImg from "../assets/giraffes.jpg";
import "./Home.css";

// Id's of the tours to feature on the homepage
const sevenDayTour = tours.find((t) => t.id === 27);
const tenDayTour = tours.find((t) => t.id === 1);

const featuredExperienceIds = [26, 5, 7, 15];
const featuredExperiences = featuredExperienceIds
  .map((id) => tours.find((t) => t.id === id))
  .filter(Boolean);

// For the "Why Choose Us" section
const whyUs = [
  {
    title: "Local Expertise",
    text: "Our guides are local experts with deep knowledge, giving you a more authentic and personal experience of Uganda.",
  },
  {
    title: "Community Impact",
    text: "Every trip directly supports Amatsiko School and sustainable community initiatives.",
  },
  {
    title: "Tailored Experiences",
    text: "No two journeys are the same. We shape each experience around your interests and travel style.",
  },
];

// For the "Impact Statistics" section
const impactStatistics = [
  {
    title: "Empowering Education",
    text: "20% of your booking fee funds the Amatsiko School, providing education and hope for vulnerable children",
  },
  {
    title: "Supporting Local Businesses",
    text: "Stay in family-owned lodges, ensuring your trip benefits local families directly."},
  {
    title: "Conservation Impact",
    text: "Your adventure helps protect endangered species and supports vital conservation programs in Uganda.",
  },
];

// For the "Testimonials" section
function ReviewerAvatar({ name, pfp }) {

    return (
      <img
        src={pfp}
        alt={name}
        className="reviewer-avatar"
      />
    );
  }

function Home() {
  //all the scrolling and carousel logic
  const carouselRef = useRef(null);
  const localGalleryRef = useRef(null);
  const [localGalleryIndex, setLocalGalleryIndex] = useState(0);

  const scrollCarousel = (direction) => {
    const node = carouselRef.current;
    if (!node) return;
    node.scrollBy({ left: direction * 340, behavior: "smooth" });
  };

  const scrollToLocalGalleryIndex = (index) => {
    const node = localGalleryRef.current;
    if (!node) return;
    const card = node.children[index];
    if (!card) return;
    node.scrollTo({ left: card.offsetLeft - node.offsetLeft, behavior: "smooth" });
    setLocalGalleryIndex(index);
  };

  const handleLocalGalleryScroll = () => {
    const node = localGalleryRef.current;
    if (!node) return;
    const cards = Array.from(node.children);
    const scrollCenter = node.scrollLeft + node.offsetWidth / 3;
    let closestIndex = 0;
    let closestDistance = Infinity;
    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft - node.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - scrollCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    setLocalGalleryIndex(closestIndex);
  };

 return (
    <div className="home">
      {/* First Section */}
      <section
        className="secondary-background-img"
        style={{ backgroundImage: `url(${safariHero})` }}
      >
        <div className="hero-content">
          <span className="eyebrow">Impact-Led Travel Experiences in Uganda</span>
          <h1>Experience Uganda beyond the safari</h1>
          <p>
            Travel with purpose. Connect with local communities, explore
            breathtaking landscapes, and be part of something that truly
            makes a difference.
          </p>
          <div className="hero-actions">
            <Link to="/tours" className="btn btn-primary">
              Explore tours
            </Link>
          </div>
        </div>
      </section>

      {/* Local Experience Section */}
     <section className="section local-experience">
        <div className="local-gallery-wrap">
          <div
            className="local-gallery-carousel"
            ref={localGalleryRef}
            onScroll={handleLocalGalleryScroll}
          >
            {localGalleryImages.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} className="local-gallery-slide" />
            ))}
          </div>

          <div className="local-gallery-dots">
            {localGalleryImages.map((img, index) => (
              <button
                key={img.src}
                type="button"
                className={`local-gallery-dot${index === localGalleryIndex ? " active" : ""}`}
                aria-label={`Show image ${index + 1}`}
                onClick={() => scrollToLocalGalleryIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="local-copy">
          <h2>Experience Uganda Like A Local</h2>
          <p>Amatsiko Tours offers more than a safari.</p>
          <p>
            Trek with gorillas in Bwindi, explore the beauty of Lake
            Bunyonyi, and connect with local communities in a way most
            travellers never experience.
          </p>
          <p>
            Every journey is designed to feel personal, meaningful, and
            unforgettable.
          </p>
          <Link to="/tours" className="btn btn-primary">
            Explore tours
          </Link>
        </div>
      </section>

      {/* Top Ugandan Safaris */}
       <section className="section">
        <div className="section-header">
          <div>
            <span className="eyebrow">Choose Your Experience</span>
            <h2>Top Ugandan Safaris</h2>
          </div>
          <Link to="/tours" className="see-all-link">
            See all tours <i className="bi bi-arrow-right" />
          </Link>
        </div>

        <div className="featured-tours">
          <div className="featured-tours-grid">
            {sevenDayTour && (
              <img
                src={sevenDayTour.image}
                alt={sevenDayTour.title}
                className="featured-tour-image"
              />
            )}
            {tenDayTour && (
              <img
                src={tenDayTour.image}
                alt={tenDayTour.title}
                className="featured-tour-image"
              />
            )}
          </div>

          <div className="featured-tours-copy">
            {sevenDayTour && (
              <div>
                <h3>7-Day Tour</h3>
                <p className="tour-tagline">A Powerful Introduction To Uganda</p>
                <p>
                  Experience gorilla trekking, cultural connection, and the
                  beauty of Lake Bunyonyi in one unforgettable journey.
                </p>
                <Link to={`/tours/${sevenDayTour.id}`} className="btn btn-primary">
                  View the 7-Day Tour
                </Link>
              </div>
            )}

            {tenDayTour && (
              <div>
                <h3>10-Day Tour</h3>
                <p className="tour-tagline">The Ultimate Uganda Experience</p>
                <p>
                  Explore wildlife, landscapes, and deeper cultural
                  connections across Uganda on this immersive adventure.
                </p>
                <Link to={`/tours/${tenDayTour.id}`} className="btn btn-primary">
                  View the 10-Day Tour
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

     {/* Your Trip, Their Future */}
      <section className="section impact-intro" id="impact">
        <div className="impact-copy">
          <h2>Your Trip, Their Future</h2>
          <p>This is more than a holiday.</p>
          <p>
            Every journey with Amatsiko supports local communities, funds
            education through Amatsiko School, and creates real
            opportunities for the people who call Uganda home.
          </p>
          <p>
            When you travel with us, you're not just visiting. You're
            contributing to something meaningful.
          </p>
          <Link to="/about" className="btn btn-primary">
            See your impact
          </Link>
        </div>

        <div className="impact-intro-images">
          <img src={"public/images/locals 7.jpeg"} alt="Local community by the water in Uganda" />
          <img src={"public/images/locals 8.jpeg"} alt="Local children in Uganda" />
        </div>
      </section>

      {/* Travel With Purpose */}
      <section className="section impact-intro">
        <div className="featured-tours" style={{ padding: "2.5rem" }}>
          <h2 style={{ color: "white", marginBottom: "1.5rem" }}>
            Travel with purpose. See your impact.
          </h2>
          <p style={{ marginBottom: "2rem", opacity: 0.9 }}>
            Your journey does more than create memories.
          </p>

          <div style={{ display: "grid", gap: "1.5rem" }}>
            {impactStatistics.map((item) => (
              <div key={item.title}>
                <h3 style={{ color: "#E2725C", fontSize: "1.1rem", marginBottom: "0.4rem" }}>
                  {item.title}
                </h3>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <Link to="/tours" className="btn btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
            Explore our tours
          </Link>
        </div>

        <img
          src={giraffesImg}
          alt="Wildlife in Uganda"
          style={{ width: "100%", height: "100%", minHeight: "320px", objectFit: "cover", borderRadius: "16px" }}
        />
      </section>

       {/* Why Choose Amatsiko Tours */}
      <section className="section why-us">
        <div className="section-header">
          <span className="eyebrow">Why Choose Amatsiko Tours?</span>
          <p className="section-subtitle">Travel is built on trust. Here’s why travellers choose Amatsiko.</p>
        </div>
 
        <div className="why-us-video">
          <iframe
            src="https://www.youtube.com/embed/GGIBXxjKUCk"
            title="Amatsiko Tours"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
 
        <div className="why-us-grid">
          {whyUs.map((item) => (
            <div className="why-us-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

       {/* Testimonials */}
      <section className="section testimonials" id="testimonials">
        <div className="section-header">
          <h2>What Our Travellers Are Really Saying</h2>
        </div>

        <div className="testimonials-row">
          <div className="testimonial-summary">
            <div className="stars">★★★★★</div>
            <strong>EXCELLENT</strong>
            <span>Based on {testimonials.length} reviews</span>
            <span className="google-mark">Google</span>
          </div>

          <div className="testimonials-carousel-wrap">
            <button
              type="button"
              className="carousel-arrow"
              onClick={() => scrollCarousel(-1)}
              aria-label="Previous reviews"
            >
              <i className="bi bi-chevron-left" />
            </button>

            <div className="testimonials-carousel" ref={carouselRef}>
              {testimonials.map((t) => (
                <div className="testimonial-card" key={t.id}>
                  <div className="reviewer">
                    <ReviewerAvatar name={t.name} pfp={t.pfp} />
                    <span>
                      {t.name}
                      <br />
                      <span className="review-date">{t.date}</span>
                    </span>
                  </div>
                  <div className="stars-small">★★★★★</div>
                  <p className="excerpt">{t.excerpt}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="carousel-arrow"
              onClick={() => scrollCarousel(1)}
              aria-label="Next reviews"
            >
              <i className="bi bi-chevron-right" />
            </button>
          </div>
        </div>
      </section>

        {/* Final CTA */}
      <section
        className="section final-cta"
        style={{ backgroundImage: `url(${Locals})` }}
      >
        <h2>Ready To Experience Uganda Differently?</h2>
        <p>This isn't just a trip. It's a journey you'll remember for a lifetime.</p>
        <p>Start planning today and we'll help you create something truly special.</p>

        <div className="final-cta-actions">
          <Link to="/tours" className="btn btn-primary">
            Explore tours
          </Link>
          <Link to="/tours" className="btn btn-outline-white btn-line">
            Plan your trip
          </Link>
        </div>
      </section>
      </div>
  );
}

export default Home;
