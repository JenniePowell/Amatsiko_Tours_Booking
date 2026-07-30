import "./HowToBook.css";

const bankDetails = [
  { label: "Beneficiary Bank Name", value: "Equity Bank Uganda Ltd" },
  { label: "SWIFT Code", value: "EQBLUGKA" },
  { label: "Beneficiary Name", value: "Amatsiko Tours Limited" },
  { label: "Account Number (USD)", value: "1045203443326" },
  { label: "Beneficiary Bank Address", value: "Equity Bank, Kabale, Uganda" },
  { label: "Beneficiary Email", value: "info@amatsikotours.com" },
  { label: "Phone (for confirmation)", value: "+256 777 476 944" },
];

function HowToBook() {
  return (
    <div className="book-page">
      <section className="book-hero">
        <div className="book-hero-overlay">
          <h1>Payment Options &amp; How To Book</h1>
          <p>Simple steps and secure options to confirm your Uganda adventure.</p>
        </div>
      </section>

      <section className="book-intro">
        <h2>
          How to Book &amp; Pay for Your Safari or Gorilla Trek with Amatsiko
          Tours Ltd.
        </h2>
      </section>

      <section className="book-section">
        <h2>Bank Details for Payment</h2>
        <p className="book-note">
          Please include your name or invoice number in the payment reference.
        </p>

        <table className="bank-table">
          <tbody>
            {bankDetails.map((row, index) => (
              <tr key={index}>
                <th>{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="book-section">
        <h2>How to Book Your Safari with Amatsiko Tours</h2>
        <p>
          After choosing your safari package, the next step is to{" "}
          <strong>confirm your arrival date</strong> and{" "}
          <strong>book your flights</strong>. Once we have this information,
          we'll secure your <strong>gorilla and chimpanzee permits</strong> (if
          included in your itinerary), which are required to begin your tour.
        </p>
      </section>

      <section className="book-band">
        <img
          src="/images/giraffes-standing-on-grass-field-surrounded-by-plants.webp"
          alt="Giraffes standing in a grassy field in Uganda"
        />
      </section>

      <section className="book-section">
        <h3>What Currency Can I Pay In?</h3>
        <p>
          We're often asked if it's possible to pay in a currency other than US
          dollars.
        </p>
        <p>
          Because East Africa's tourism industry runs on the{" "}
          <strong>US dollar</strong>, we're unable to accept payments in pounds,
          euros, Australian dollars, or other foreign currencies.
        </p>
        <p>
          Your local booking agent <strong>may</strong> be able to accept
          payment in other currencies, but{" "}
          <strong>our head office only accepts USD</strong>.
        </p>
      </section>

      <section className="book-section">
        <h3>Bank Transfer</h3>
        <p>
          Bank transfer is by far the easiest and most secure payment method. A
          bank transfer can be made using the details in the table above. All
          payments should be made in <strong>US dollars</strong>.
        </p>
      </section>

      <section className="book-section">
        <h3>Paying with Wise (TransferWise)</h3>
        <p>
          We recommend using{" "}
          <a href="https://wise.com" target="_blank" rel="noreferrer">
            Wise.com
          </a>{" "}
          for international transfers. Wise offers:
        </p>
        <ul>
          <li>Excellent exchange rates</li>
          <li>Transparent fees</li>
          <li>Easy transfers from your bank or card</li>
          <li>The option to send in your local currency while we receive USD</li>
        </ul>
        <p>
          You can send through the website or mobile app, and most transfers
          complete in 1&ndash;2 business days.
        </p>
      </section>

      <section className="book-section">
        <h3>Cash on Arrival (By Arrangement Only)</h3>
        <p>
          In some cases, we can accept cash payment in USD at the start of your
          tour&mdash;usually for remaining balances.
        </p>
        <ul>
          <li>
            Full payment must be made <strong>before your safari begins</strong>
          </li>
          <li>This must be pre-approved by your tour consultant</li>
          <li>
            Notes must be <strong>clean, undamaged, and issued after 2009</strong>
          </li>
        </ul>
      </section>

      <section className="book-section">
        <h2>Refunds &amp; Rescheduling</h2>
        <p>
          We understand that life happens&mdash;illness, emergencies, or changes
          in plans. Our team will always try to{" "}
          <strong>reschedule your safari</strong> rather than cancel it,
          wherever possible.
        </p>
        <p>
          While lodge and permit policies vary, many are flexible about date
          changes. Refunds may be limited due to third-party costs (like gorilla
          permits), but we'll always do our best to support you.
        </p>
      </section>

      <section className="book-section insurance-section">
        <img
          className="insurance-motif"
          src="/images/African-print-Circle-1.webp"
          alt=""
          aria-hidden="true"
        />
        <div className="insurance-inner">
          <h2>Travel Insurance</h2>
          <p>
            We highly recommend that you take out{" "}
            <strong>comprehensive travel insurance</strong> before you travel.
          </p>
          <p>It should include:</p>
          <ul>
            <li>Trip cancellation or delay</li>
            <li>Medical emergencies and evacuation</li>
            <li>Lost luggage or documents</li>
            <li>Adventure activity cover (if needed)</li>
          </ul>
          <p>
            Travel insurance gives you peace of mind&mdash;so you can enjoy every
            moment of your trip, stress-free.
          </p>
        </div>
      </section>

      <section className="book-cta">
        <h2>Book your Ugandan adventure</h2>
        <a className="book-cta-button" href="/Tours">
          Book your trip today
        </a>
      </section>
    </div>
  );
}

export default HowToBook;