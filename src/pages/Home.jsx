import { useState } from "react";
import Modal from "../components/Modal";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";

const Home = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="page home">
            <section className="hero">
                <h1 className="hero__title">Run Your Universe</h1>
                <p className="hero__subtitle"> Join the most energetic running club in the galaxy</p>
                <button className="btn btn--primary" 
                onClick={() => setIsModalOpen(true)}>Get started</button>
            </section>

            <Slider/>

            <section className="about">
                <p className="about__text">
                Runiverse is a community of runners who train together, travel to races,
                and support each other.<br></br>From beginners to marathoners — everyone finds
                their place here.
                </p>
            </section>

            <section className="quick">
                <h2 className="quick__title">Explore</h2>

                <div className="quick__grid">

                <Link to="/plans" className="explore-link">
                <div className="quick__card">
                    <h3>Plans</h3>
                    <p>Choose your training path</p>
                </div>
                </Link>

                <Link to="/races" className="explore-link">
                <div className="quick__card">
                    <h3>Races</h3>
                    <p>Find your next challenge</p>
                </div>
                </Link>

                <Link to="/gear" className="explore-link">
                <div className="quick__card">
                    <h3>Gear</h3>
                    <p>Run in style confidently</p>
                </div>
                </Link>
                </div>
            </section>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default Home;