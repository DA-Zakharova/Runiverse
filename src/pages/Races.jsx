import { races } from "../data/races";
import RaceCard from "../components/RaceCard";
import { useState } from "react";

const Races = () => {

    const [activeDistance, setActiveDistance] = useState("all");
    const filteredRaces = activeDistance === "all" ? races : races.filter((race) => race.distance === activeDistance);
        
    return (
        <div className="races">
            <div className="races-title">
            <h1 className="hero__title">Races</h1>
            <p className="hero__subtitle">Pick your next adventure 🌍</p>
            </div>

            <div className="plans-buttons">
            <button className={activeDistance === "all" ? "filter-btn filter-btn-active" : "filter-btn"} onClick={() => setActiveDistance("all")}>all</button>
            <button className={activeDistance === "5K" ? "filter-btn filter-btn-active" : "filter-btn"} onClick={() => setActiveDistance("5K")}>5K</button>
            <button className={activeDistance === "10K" ? "filter-btn filter-btn-active" : "filter-btn"} onClick={() => setActiveDistance("10K")}>10K</button>
            <button className={activeDistance === "Half Marathon" ? "filter-btn filter-btn-active" : "filter-btn"} onClick={() => setActiveDistance("Half Marathon")}>Half Marathon</button>
            <button className={activeDistance === "Marathon" ? "filter-btn filter-btn-active" : "filter-btn"} onClick={() => setActiveDistance("Marathon")}>Marathon</button>
            </div>

            <div className="race-grid">
                {filteredRaces.map((race => <RaceCard key={race.id} race={race}/>))}
            </div>
        </div>
    )
}

export default Races;