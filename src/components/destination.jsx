import { useContext } from 'react';
import { CardContext } from '../context/context';

export default function Destination() {
    const { destinations } = useContext(CardContext)
    return (
        <section className="destination">
            <div className="navigation">
            <button className="nav-button"></button>
            <button className="nav-right"></button>
            </div>
            <div className="destinations-card">
                {destinations.map((destinations, index) => (
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