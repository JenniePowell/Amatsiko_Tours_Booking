import { Link } from "react-router-dom";
import "./About.css";

const reasons = [
  {
    title: "Sustainability",
    text: "Our tours benefit both local people and the environment, ensuring a positive long-term impact.",
  },
  {
    title: "Community",
    text: "Meet locals, experience their culture, and know that your visit is helping strengthen their future.",
  },
  {
    title: "Empowerment",
    text: "Your trip creates opportunities for local people to build a better future.",
  },
  {
    title: "Authenticity",
    text: "Experience the real Uganda—raw, unfiltered, and full of life. No tourist traps—just meaningful connections.",
  },
];

const impactBlocks = [
  {
    image: "/images/20220413_114856.webp",
    alt: "Mountain gorilla looking up in Bwindi National Park, Uganda",
    title: "Protecting Endangered Gorillas",
    text: "When you trek with us, you'll experience the thrill of seeing gorillas in the wild—knowing that your journey helps protect these incredible animals. By supporting conservation efforts, you're playing a vital role in preserving Uganda's wildlife for generations to come.",
  },
  {
    image: "/images/74FFA593-46EE-4381-8331-1878064EBA22_1_105_c-1-768x577.webp",
    alt: "Students at Amatsiko Preparatory School in Uganda",
    title: "Bringing Hope Through Education",
    text: "Every time you book a trip, you're giving back to the children of Amatsiko School. Your support helps fund education, meals, and essential resources for over 400 children—providing opportunities they wouldn't otherwise have.",
  },
  {
    image: "/images/656447C9-66C1-4090-95DB-0E0C598F4069_1_105_c.webp",
    alt: "Two elderly people in colourful traditional clothing in rural Uganda",
    title: "Making an Impact Together",
    text: "By choosing to travel with us, you're directly empowering Ugandan communities through fair wages, education, and sustainable farming initiatives. Visit local farms and community projects to see firsthand how your trip contributes to real, lasting change.",
  },
];

const partnerLogos = [
  { src: "/images/UTB_Logo_No_Background-300x110.webp", alt: "Uganda Tourism Board" },
  { src: "/images/Uganda_Wildlife_Authority_Logo.webp", alt: "Uganda Wildlife Authority" },
  { src: "/images/uganda-tourism-board-logo-870x480-1-300x166.webp", alt: "Tourism Uganda" },
  { src: "/images/Association-of-Uganda-Tour-Operators.webp", alt: "Association of Uganda Tour Operators" },
  { src: "/images/Climate-friendly-Travel-Logo-300x300.webp", alt: "Climate Friendly Travel" },
];

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay">
          <h1>About Us</h1>
          <p className="about-quote">
            "We want to show you the beauty of our people and places—not just as
            tourists, but as friends."
          </p>
          <p className="about-quote-author">– Alex, Amatsiko Tours Founder</p>
        </div>
      </section>

      <section className="about-section">
        <h2>Your Journey with Amatsiko Tours</h2>
        <p>
          Imagine trekking through the heart of Uganda, coming face to face with
          majestic mountain gorillas, and sharing a meal with the people who
          call this place home. At Amatsiko Tours, it's not just about what
          you'll see—it's about how you'll connect. Your adventure with us will
          introduce you to the real Uganda, where every experience is a chance
          to make a lasting difference.
        </p>
        <p>
          When you travel with us, you're not just a visitor—you're a part of
          something bigger. Founded by Alex and Alphonse, Amatsiko Tours was born
          out of a desire to give travellers like you a deeper, more meaningful
          experience. After starting Amatsiko Preparatory School for over 400
          vulnerable students, many of whom are orphans, they realised that
          tourism could do more than just show you the sights. It could change
          lives—yours and the people you meet.
        </p>
        <Link className="about-button" to="/tours">
          View our tours
        </Link>
      </section>

      <section className="about-section about-impact">
        <div className="about-impact-text">
          <h2>How Your Journey Makes an Impact</h2>
          <p>Every trip with Amatsiko Tours offers:</p>
          <ul>
            <li>
              <strong>A deeper connection:</strong> Stay with local families,
              share meals, and experience Uganda's heart and soul.
            </li>
            <li>
              <strong>The chance to give back:</strong> Your booking helps fund
              Amatsiko School, providing education and meals to children who
              need it most.
            </li>
            <li>
              <strong>Wildlife encounters that matter:</strong> Trekking with
              gorillas helps support conservation efforts to protect their
              natural habitat.
            </li>
            <li>
              <strong>Empowering local communities:</strong> Your trip creates
              jobs and opportunities for local communities.
            </li>
          </ul>
        </div>

        <div className="about-impact-images">
          <img src="/images/B12BF7A3-C7DB-4F40-992B-5889EF00E463_1_105_c-1.webp" alt="Child pumping clean water in Buzaniro village, Uganda" />
          <img src="/images/VID-20220407-WA0032.webp" alt="Classroom visit at Amatsiko Preparatory School" />
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-centered">Why Travel with Us?</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div className="reason-card" key={index}>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-centered">Your Adventure, Their Future</h2>
        {impactBlocks.map((block, index) => (
          <div
            className={
              index % 2 === 0 ? "impact-block" : "impact-block reversed"
            }
            key={index}
          >
            <img src={block.image} alt={block.alt} />
            <div className="impact-block-text">
              <h3>{block.title}</h3>
              <p>{block.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="about-logos">
        {partnerLogos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} />
        ))}
      </section>

      <section className="about-cta">
        <h2>Ready to See Uganda Differently?</h2>
        <p>
          When you join Amatsiko Tours, you're not just ticking off a bucket-list
          adventure—you're making an impact that lasts. Your journey will leave
          you with memories that matter and connections that stay with you long
          after you've returned home.
        </p>
        <Link className="about-cta-button" to="/contact">
          Enquire now
        </Link>
      </section>
    </div>
  );
}

export default About;