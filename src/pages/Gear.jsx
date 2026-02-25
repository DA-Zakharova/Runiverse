import './Gear.css';
import { gear } from "../data/gear";
import GearCard from "../components/GearCard";
import { useState } from "react";
import FilterButtons from "../components/FilterButtons";

const Gear = () => {

    const [activeGear, setActiveGear] = useState("all");
    const filteredGear = activeGear === "all" ? gear : gear.filter((item) => item.category === activeGear);
        
    return (
        <div className="gear">
            <div className="gear-title">
            <h1 className="hero__title">Gear for Every Run</h1>
            <p className="hero__subtitle">Comfort, speed, and style 👟</p>
            </div>

            <FilterButtons
            options={["all", "clothing", "shoes", "accessories"]}
            value={activeGear}
            onChange={setActiveGear}
            />

            <div className="gear-grid">
                {filteredGear.map((item => <GearCard key={item.id} item={item}/>))}
            </div>
        </div>
    )
}

export default Gear;