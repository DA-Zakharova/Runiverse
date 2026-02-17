import { useState } from "react";

const PlanCard = ({plan}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="plan-card">
            <div className="plan-header" onClick={() => setIsOpen(!isOpen)}>
                <h2>{plan.title} {isOpen ? "▲" : "▼"}</h2>
            </div>

        {isOpen && <div className="plan-content">
            <p>Level: {plan.level}</p>
            <p>Goal: {plan.goal}</p>
            <p>Duration: {plan.duration}</p>
            <p>{plan.description}</p>
            <p>Days per week: {plan.daysPerWeek}</p>
            </div>
        }
        </div>
    )
}

export default PlanCard;