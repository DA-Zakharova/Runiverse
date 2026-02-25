import './Navbar.css';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const favoritesCount = useSelector((state) => state.favorites.items.length);

    const closeMenu = () => setIsOpen(false);

    return (
    <header className="header">
        <div className="topbar">
            <button className="burger" onClick={() => setIsOpen(!isOpen)}>☰</button>
            <NavLink
            className={({ isActive }) => isActive ? "navLink active" : "navLink"} 
            to="/favorites"
            >
            ⭐️ ({favoritesCount})
            </NavLink>
        </div>

        <nav className={isOpen ? "menu open" : "menu"}>
            <NavLink
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
            to="/"
            onClick={closeMenu}
            >
            Home
            </NavLink>

            <NavLink
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
            to="/club"
            onClick={closeMenu}
            >
            Club
            </NavLink>

            <NavLink
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
            to="/plans"
            onClick={closeMenu}
            >
            Plans
            </NavLink>

            <NavLink
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
            to="/races"
            onClick={closeMenu}
            >
            Races
            </NavLink>

            <NavLink
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
            to="/gear"
            onClick={closeMenu}
            >
            Gear
            </NavLink>

            <NavLink
            className={({ isActive }) =>
                isActive ? "navLink active favDesktop" : "navLink favDesktop"
            }
            to="/favorites"
            onClick={closeMenu}
            >
            ⭐️({favoritesCount})
            </NavLink>
        </nav>
        </header>
    );
}

export default Navbar;
