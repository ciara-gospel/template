import { useContext } from 'react';


export default function Destination() {
    const { destination } = useContext(CardContext)
    return (
        <section className="destination">
            <div className="navigation">
            <button className="nav-button"></button>
            <button className="nav-right"></button>
            </div>
            <div className="destinations-card">
                {destination.map((destinations, index) => (
                    <div key={index} className="destinations">
                    <img src={destinations.image} alt={destinations.name} />
                    <h2>{destinations.name}</h2>
                    <p>{destinations.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}