import './Plans.css';
import { plans } from "../data/plans";
import PlanCard from "../components/PlanCard";
import { useState } from "react";
import plan from "../assets/plan.png";
import Modal from "../components/Modal";
import FilterButtons from "../components/FilterButtons";

const Plans = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [activeLevel, setActiveLevel] = useState("all");
    const filteredPlans = activeLevel === "all" ? plans : plans.filter((plan) => plan.level === activeLevel);
    
    return (
        <div className="plans">
            <div className="plans-title">
                <h1 className="hero__title">Training Plans</h1>
                <img src={plan} alt="training plan" className="plans-img"/>
                <p className="hero__subtitle">Pick your level and open a plan to see details.</p>
            </div>

            <FilterButtons
            options={["all", "beginner", "intermediate", "advanced"]}
            value={activeLevel}
            onChange={setActiveLevel}
            />

            <div className="plansCard">
                {filteredPlans.map((plan => <PlanCard key={plan.id} plan={plan}/>))}
            </div>

            <div className="plans-title">
                <button className="btn btn--primary" 
                onClick={() => setIsModalOpen(true)}>Join us</button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </div>
    )
}

export default Plans;