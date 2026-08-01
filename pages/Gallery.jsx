import { useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const galleryImages = [
  { src: "/images/IMG-20241004-WA0000-1536x1152.webp", alt: "Guest with a gorilla in the forest, Uganda" },
  { src: "/images/elephants-on-waters-edge.webp", alt: "Guest watching elephants at the water's edge" },
  { src: "/images/certificate-for-Gorillas-trek.webp", alt: "Guest holding a gorilla trekking certificate" },
  { src: "/images/Villagers-making-musix.webp", alt: "Villagers making music in traditional dress" },
  { src: "/images/IMG-20241004-WA0004-1536x1152.webp", alt: "Guests and local community group together" },
  { src: "/images/herbs.webp", alt: "Guests learning from a local herbalist" },
  { src: "/images/craft.webp", alt: "Guests learning traditional crafts" },
  { src: "/images/20220411_194113.webp", alt: "Guests dining outdoors around a campfire at night" },
  { src: "/images/C16A06F2-9380-4C51-8AE1-3762C3B2C850_1_105_c.webp", alt: "Local beekeeper beside traditional log hives" },
  { src: "/images/24AAC9E1-8D36-4817-A6FE-B139F9909B27_1_105_c.webp", alt: "Vendors at a colourful Ugandan produce market" },
  { src: "/images/22EC38A7-5CDA-4A72-9FF6-76744D89F876_1_105_c.webp", alt: "A mother and child in a village doorway" },
  { src: "/images/guests-enjoying-their-tour-1536x1152.webp", alt: "Guests and guides enjoying dinner by a river" },
  { src: "/images/IMG-20220406-WA0059.webp", alt: "Guests exploring a busy market with a guide" },
  { src: "/images/20220406_141037.webp", alt: "A guest walking through a market hall" },
  { src: "/images/beautiful-Uganda-1536x1152.webp", alt: "Guests taking in a lake view in Uganda" },
  { src: "/images/the-view.webp", alt: "Misty forest and mountain view from a lodge" },
];

const themes = [
  {
    number: "1",
    title: "The Tour Experience",
    text: "Discover the wild beauty of Uganda—explore untouched landscapes, encounter majestic wildlife, and trek with the mountain gorillas, guided by local experts.",
  },
  {
    number: "2",
    title: "Community Engagement",
    text: "Immerse yourself in village life. From learning traditional crafts to sharing meals, these moments are about connecting with locals and giving back to the community.",
  },
  {
    number: "3",
    title: "The School Connection",
    text: "Step into Amatsiko School, where your journey directly supports the education and future of over 400 children. Meet the students, share a smile, and see the difference you're making.",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="gallery-hero">
        <h1>Gallery</h1>
      </section>

      <section className="gallery-intro">
        <h2>Faces, places and unforgettable moments</h2>
        <p>
          Explore the true heart of East Africa through the lens of our
          travellers. From breathtaking encounters with mountain gorillas to
          life-changing moments with local communities, these snapshots tell the
          story of journeys that go beyond the ordinary. Each photo captures the
          impact you'll make, the connections you'll build, and the adventure
          that awaits.
        </p>
        <Link className="gallery-button" to="/contact">
          Book your tour today
        </Link>
      </section>

      <section className="gallery-themes">
        {themes.map((theme, index) => (
          <div className="theme-card" key={index}>
            <span className="theme-number">{theme.number}</span>
            <h3>{theme.title}</h3>
            <p>{theme.text}</p>
          </div>
        ))}
      </section>

      <section className="gallery-grid">
        {galleryImages.map((image, index) => (
          <button
            type="button"
            className="gallery-item"
            key={index}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </button>
        ))}
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close image"
          >
            ×
          </button>
          <img src={selectedImage.src} alt={selectedImage.alt} />
        </div>
      )}
    </div>
  );
}

export default Gallery;