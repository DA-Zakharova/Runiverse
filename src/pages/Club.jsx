import './Club.css';
import support from "../assets/support.jpg";
import discipline from "../assets/discipline.jpg";
import fun from "../assets/fun.jpg";
import { useState } from "react";
import Modal from "../components/Modal";

const Club = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="page club">
        <section className="club-hero">
            <h1 className="hero__title">Welcome to Runiverse Club</h1>
            <p className="hero__subtitle">Every pace, every goal, every runner matters here.</p>
        </section>

        <section className="club-about">
            <p>
                Runiverse is not only about kilometers and medals.
                It’s about friendships, shared goals and motivation.
                We train together, travel to races and celebrate every achievement — big or small.
            </p>
        </section>

        <section className="club-members">
            <h2 className="quick__title">Our runners</h2>

            <div className="club-grid">
                <div className="member-card">
                    <h3>🟢 Beginners</h3>
                    <p>Just starting their journey.
                    We help them build confidence step by step.</p>
                </div>

                <div className="member-card">
                    <h3>🔵 Marathoners</h3>
                    <p>Focused on long distances and personal records.
                    Discipline and endurance are their strengths.</p>
                </div>

                <div className="member-card">
                    <h3>🟣 Travelers</h3>
                    <p>They run in new cities and explore the world through races.</p>
                </div>

                <div className="member-card">
                    <h3>🟠 Weekend Runners</h3>
                    <p>Running for joy, balance and energy after a busy week.</p>
                </div>
            </div>
        </section>

        <section className="club-values">
            <h2 className="quick__title">Our values</h2>
            <div className="values-grid">
                <div>
                    <img src={support} alt="support" className="value-icon"/>
                    <h3>Support</h3>
                    <p>We never run alone.</p>
                </div>

                <div>
                    <img src={discipline} alt="discipline" className="value-icon"/>
                    <h3>Discipline</h3>
                    <p>Small steps every day.</p>
                </div>

                <div>
                    <img src={fun} alt="fun" className="value-icon"/>
                    <h3>Fun</h3>
                    <p>Running should be joyful.</p>
                </div>
            </div>
        </section>

        <section className="club-join">
            <p>Ready to become part of Runiverse?</p>
            <button className="btn btn--primary" onClick={() => setIsModalOpen(true)}>Join the Club</button>
        </section>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>

        </div>
    )
}

export default Club;