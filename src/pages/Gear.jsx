import { gear } from "../data/gear";
import GearCard from "../components/GearCard";
import { useState } from "react";

const Gear = () => {

    const [activeGear, setActiveGear] = useState("all");
    const filteredGear = activeGear === "all" ? gear : gear.filter((item) => item.category === activeGear);
        
    return (
        <div className="races">
            <div className="races-title">
            <h1 className="hero__title">Gear for Every Run</h1>
            <p className="hero__subtitle">Comfort, speed, and style 👟</p>
            </div>

            <div className="plans-buttons">
            <button className={activeGear === "all" ? "filter-btn filter-btn-active" : "filter-btn"} onClick={() => setActiveGear("all")}>all</button>
            <button className={activeGear === "clothing" ? "filter-btn filter-btn-active" : "filter-btn"} onClick={() => setActiveGear("clothing")}>clothing</button>
            <button className={activeGear === "shoes" ? "filter-btn filter-btn-active" : "filter-btn"} onClick={() => setActiveGear("shoes")}>shoes</button>
            <button className={activeGear === "accessories" ? "filter-btn filter-btn-active" : "filter-btn"} onClick={() => setActiveGear("accessories")}>accessories</button>
            </div>

            <div className="race-grid">
                {filteredGear.map((item => <GearCard key={item.id} item={item}/>))}
            </div>
        </div>
    )
}

export default Gear;