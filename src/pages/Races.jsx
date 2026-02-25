import './Races.css';
import { races } from "../data/races";
import RaceCard from "../components/RaceCard";
import { useState } from "react";
import FilterButtons from "../components/FilterButtons";

const Races = () => {

    const [activeDistance, setActiveDistance] = useState("all");
    const filteredRaces = activeDistance === "all" ? races : races.filter((race) => race.distance === activeDistance);
        
    return (
        <div className="races">
            <div className="races-title">
            <h1 className="hero__title">Races</h1>
            <p className="hero__subtitle">Pick your next adventure 🌍</p>
            </div>

            <FilterButtons
            options={["all", "5K", "10K", "Half Marathon", "Marathon"]}
            value={activeDistance}
            onChange={setActiveDistance}
            />

            <div className="race-grid">
                {filteredRaces.map((race => <RaceCard key={race.id} race={race}/>))}
            </div>
        </div>
    )
}

export default Races;