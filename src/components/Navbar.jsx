import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const favoritesCount = useSelector((state) => state.favorites.items.length);
    return (
        <nav>
            <NavLink className={({isActive}) => isActive ? "navLink active" : "navLink"} to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "navLink active" : "navLink"} to="/club">Club</NavLink>
            <NavLink className={({isActive}) => isActive ? "navLink active" : "navLink"} to="/plans">Plans</NavLink>
            <NavLink className={({isActive}) => isActive ? "navLink active" : "navLink"} to="/races">Races</NavLink>
            <NavLink className={({isActive}) => isActive ? "navLink active" : "navLink"} to="/gear">Gear</NavLink>
            <NavLink className={({isActive}) => isActive ? "navLink active" : "navLink"} to="/favorites">⭐️({favoritesCount})</NavLink>
        </nav>
    );
}

export default Navbar;