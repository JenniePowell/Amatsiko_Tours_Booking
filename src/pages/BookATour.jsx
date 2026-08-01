import { useState } from "react";
import "./BookATour.css";

const benefits = [
  "Customized private travel",
  "No-pressure inquiry",
  "Best price guarantee",
  "Unmatched support & service",
  "Response within 24 hours",
];

function BookATour() {
  const [formData, setFormData] = useState({
    activities: "",
    days: "",
    travellingWith: "",
    travelDate: "",
    budget: "",
    notes: "",
    adults: "1",
    children: "0",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    consent: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Travel request submitted:", formData);
    alert("Thank you! Your travel request has been sent. We'll reply within 24 hours.");
  };

  return (
    <div className="travel-page">
      <section className="travel-hero">
        <div className="travel-hero-overlay">
          <h1>Travel Request</h1>
          <p>Tell us a bit about your travel dreams and we'll take care of the rest.</p>
        </div>
      </section>

      <div className="travel-layout">
        <form className="travel-form" onSubmit={handleSubmit}>
          <h2>Trip details</h2>

          <label htmlFor="activities">What do you want to do? *</label>
          <select
            id="activities"
            name="activities"
            value={formData.activities}
            onChange={handleChange}
            required
          >
            <option value="">Please choose...</option>
            <option value="Safari">Safari</option>
            <option value="Gorilla trekking">Gorilla trekking</option>
            <option value="Chimpanzee trekking">Chimpanzee trekking</option>
            <option value="Volunteering">Volunteering</option>
            <option value="Cultural experiences">Cultural experiences</option>
          </select>
          <p className="field-hint">
            Note: minimum age for gorillas is 15 and chimpanzees is 12.
          </p>

          <label htmlFor="days">How many days do you want to travel? *</label>
          <select
            id="days"
            name="days"
            value={formData.days}
            onChange={handleChange}
            required
          >
            <option value="">Please choose...</option>
            <option value="3 days">3 days</option>
            <option value="4 days">4 days</option>
            <option value="5 days">5 days</option>
            <option value="6 days">6 days</option>
            <option value="7 days">7 days</option>
            <option value="8 days">8 days</option>
            <option value="9 days">9 days</option>
            <option value="10 days">10 days</option>
            <option value="11 days">11 days</option>
            <option value="12 days">12 days</option>
            <option value="13 days">13 days</option>
            <option value="14 days">14 days</option>
            <option value="15+ days">15+ days</option>
          </select>

          <label htmlFor="travellingWith">Who are you travelling with? *</label>
          <select
            id="travellingWith"
            name="travellingWith"
            value={formData.travellingWith}
            onChange={handleChange}
            required
          >
            <option value="">Please choose...</option>
            <option value="Honeymoon">Honeymoon</option>
            <option value="Family">Family</option>
            <option value="Solo">Solo</option>
            <option value="Couple">Couple</option>
            <option value="Group of friends">Group of friends</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="travelDate">When do you want to travel? *</label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            required
          />
          <p className="field-hint">
            You can always change it later on, if you're not sure.
          </p>

          <label htmlFor="budget">Do you have a budget per person in mind? *</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="">Please choose...</option>
            <option value="$1500">$1500</option>
            <option value="$2000">$2000</option>
            <option value="$2500">$2500</option>
            <option value="$3000">$3000</option>
            <option value="$3500">$3500</option>
            <option value="$4000">$4000</option>
            <option value="$4500">$4500</option>
            <option value="$5000">$5000</option>
            <option value="$5500">$5500</option>
            <option value="$6000">$6000</option>
            <option value="$6500">$6500</option>
            <option value="$7000">$7000</option>
            <option value="$7500+">$7500+</option>
          </select>
          <p className="field-hint">Budget excluding international flights.</p>

          <label htmlFor="notes">Anything else you'd like to share with us?</label>
          <textarea
            id="notes"
            name="notes"
            rows="4"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Tell us anything that will help us plan your trip"
          />

          <div className="field-row">
            <div>
              <label htmlFor="adults">Number of adults *</label>
              <select
                id="adults"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                required
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="children">Number of children *</label>
              <select
                id="children"
                name="children"
                value={formData.children}
                onChange={handleChange}
                required
              >
                {Array.from({ length: 21 }, (_, i) => i).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <h2>Your contact details</h2>

          <div className="field-row">
            <div>
              <label htmlFor="firstName">First name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="country">Country *</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <label className="consent-label">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <span>
              I give permission to receive a travel proposal for a safari and/or
              beach vacation, as well as any other relevant news regarding my trip.
            </span>
          </label>

          <button type="submit">Submit travel request</button>
        </form>

        <aside className="travel-info">
          <h2>Make Your Uganda Dream Trip Come True</h2>
          <p>
            Walk with giraffes. Trek with gorillas. Connect with real Ugandan
            communities. We design unforgettable journeys with heart—where
            adventure meets purpose.
          </p>

          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <i className="bi bi-check-circle-fill"></i>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="rating-box">
            <p className="rating-label">How previous guests rated us:</p>
            <p className="rating-stars">
              5/5
              <span>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </span>
            </p>
          </div>
        </aside>
      </div>

      <section className="travel-cta">
        <h2>Got questions?</h2>
        <p>
          If you have questions or need help with planning, reach out to us.
          We're excited to help you plan your adventure!
        </p>
        <a className="travel-cta-button" href="/contact">
          Call Us Today
        </a>
      </section>
    </div>
  );
}

export default BookATour;