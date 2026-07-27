function TourCard({ tour }) {
    return (
        <article className="tour-crd">
            <img src={tour.image} alt={tour.title} />
        
            <div className="tour-card-content">
                <h2>{tour.title}</h2>

                <p>{tour.location}</p>
                <p>{tour.duration}</p>
                <p>{tour.description}</p>
                <p><strong>£{tour.price}</strong>></p>

                <button type="button">Book this tour</button>
            </div>
        </article>
    );
}

export default TourCard;