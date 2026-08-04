import { useState } from "react";
import "./ContactUs.css";
import africanPrint from "../assets/african-print.png";

const galleryImages = [
  { src: "/images/20220412_122144.webp", alt: "Elephant among green bushes in Uganda" },
  { src: "/images/20220414_144903.webp", alt: "Visitors meeting a monkey at a lodge in Uganda" },
  { src: "/images/DSC_0917.webp", alt: "Two people smiling on a boat cruise in Uganda" },
  { src: "/images/photo-of-children-inside-classroom.webp", alt: "Children and a visitor smiling inside a classroom" },
  { src: "/images/VID-20220409-WA0132-600x330.webp", alt: "People dancing in colourful traditional attire" },
  { src: "/images/20220413_112215.webp", alt: "Visitors serving water to a local community" },
  { src: "/images/20220407_104954-600x800.webp", alt: "A mountain gorilla in the forest" },
  { src: "/images/VID-20220407-WA0004-600x330.webp", alt: "Visitors speaking to children in a classroom" },
];

const faqs = [
  {
    question: "What security do you provide on your tours?",
    answer:
      "Your safety is our priority. All tours are guided by experienced local experts, and we only work with trusted, vetted partners. From secure accommodation to reliable transportation, we ensure you're in good hands throughout your journey.",
  },
  {
    question: "Do I have to share accommodation?",
    answer:
      "Accommodation options depend on the tour. We offer both shared and private accommodation—simply let us know your preference when booking, and we'll make sure you're comfortable.",
  },
  {
    question: "Is there Wi-Fi?",
    answer:
      "All accommodations provide Wi-Fi, although service may be limited in remote areas. We encourage you to enjoy the experience of disconnecting and immersing yourself in your holiday.",
  },
  {
    question: "Can I visit the school, community and the gorillas?",
    answer:
      "Absolutely! All of our tours can include opportunities to visit Amatsiko Preparatory School, engage with local communities, and trek with mountain gorillas in their natural habitat. It's a full-circle experience—making a positive impact while exploring Uganda's wonders.",
  },
  {
    question: "What's the weather like in Uganda?",
    answer:
      "Uganda has a tropical climate, with warm temperatures year-round. The rainy seasons are from March to May and September to November, but even during these times, wildlife tours are still possible, and the landscape is beautifully lush.",
  },
  {
    question: "How do I get a visa for Uganda?",
    answer:
      "Uganda requires most visitors to have a visa. You can apply online for an e-visa before your trip, and we're happy to guide you through the process if needed. Be sure to check specific entry requirements for your nationality.",
  },
  {
    question: "Do you book my flights for me?",
    answer:
      "While we don't handle flight bookings directly, we're happy to recommend trusted travel partners and provide guidance on the best flight options to match your tour dates.",
  },
  {
    question: "Can I customize my tour?",
    answer:
      "Yes! We offer flexible options to tailor your tour to your preferences. Whether it's extending your stay, adding specific activities, or focusing on certain cultural experiences, just let us know, and we'll help craft the perfect trip.",
  },
];

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Contact Us</h1>
          <p>Got a question? We're here to help!</p>
        </div>

        <img src={africanPrint} className="contact-hero-pattern" aria-hidden="true"/>

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

      <section className="contact-intro">
        <p>
          Curious about our tours or need help planning your Uganda adventure?
        </p>
      </section>

      <section className="contact-methods">
        <div className="contact-card">
          <i className="bi bi-whatsapp"></i>
          <h3>Let's talk now</h3>
          <p>Call or WhatsApp us</p>
          <a href="https://wa.me/256777476944" target="_blank" rel="noreferrer">
            +256 777 476944
          </a>
        </div>

        <div className="contact-card">
          <i className="bi bi-calendar-check"></i>
          <h3>Prefer to book a time?</h3>
          <p>Pick a time that suits you&mdash;no pressure, no commitment.</p>
          <a
            href="https://calendly.com/amatsikotours-info/tour-discovery-call"
            target="_blank"
            rel="noreferrer"
          >
            Schedule a call
          </a>
        </div>

        <div className="contact-card">
          <i className="bi bi-envelope"></i>
          <h3>Email Us</h3>
          <p>We usually reply within a day</p>
          <a href="mailto:info@amatsikotours.com">info@amatsikotours.com</a>
        </div>

        <div className="contact-card">
          <i className="bi bi-geo-alt"></i>
          <h3>Location</h3>
          <p>
            Amatsiko Tours Ltd. P.O. Box 379, Behind All Saints Church,
            Kicollege Street, Kabale Municipality, UGANDA
          </p>
        </div>
      </section>

      <section className="contact-form-section">
        <img
          className="contact-form-motif"
          src="/images/African-print-Circle-1.webp"
          alt=""
          aria-hidden="true"
        />
        <div className="contact-form-inner">
          <h2>Send us a message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send a message</button>
          </form>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently asked questions</h2>
        <p className="faq-intro">
          Planning a trip to Uganda is exciting, and we're sure you'll have a few
  questions. Here are answers to some of the ones we're asked most often.
  If you need anything else, please <a href="mailto:info@amatsikotours.com" className="faq-link">get in touch</a>.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span>
                  <span className="faq-icon">
                    {openFaq === index ? "\u2212    " : "+    "}
                  </span>
                  {faq.question}
                </span>
              </button>
 
              {openFaq === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="contact-gallery">
        {galleryImages.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </section>

      <section className="contact-cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          If you have more questions or need help with planning, reach out to
          us. We're excited to help you plan your adventure!
        </p>
      </section>
    </div>
  );
}

export default ContactUs;