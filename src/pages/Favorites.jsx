import { useDispatch, useSelector } from "react-redux";
import { races } from "../data/races";
import { gear } from "../data/gear";
import RaceCard from "../components/RaceCard";
import GearCard from "../components/GearCard";
import { clearFavorites, toggleFavorite } from "../redux/favoritesSlice";

const Favorites = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.favorites.items);

    const favoriteRaceIds = items
    .filter((item) => item.kind === "race")
    .map((item) => item.id);

    const favoriteRaces = races.filter((race) => favoriteRaceIds.includes(race.id));

    const favoriteGearIds = items
    .filter((item) => item.kind === "item")
    .map((item) => item.id);

    const favoriteGear = gear.filter((g) => favoriteGearIds.includes(g.id));

    const handleClearAll = () => {
        dispatch(clearFavorites());
    }

    return (
        <div className="favorites">
            <div className="favorites-hero">
            <h1 className="hero__title">My Favorites</h1>
            <h2 className="hero__subtitle">Your personal running universe</h2>

            {items.length > 0 && (
                <button className="clearAll" onClick={handleClearAll}>clear all ❌</button>
            )}

            <p className="hero__subtitle">Races</p>

            {favoriteRaces.length === 0 ? (
                <p className="favoritesText">No favorite races yet</p>
            ) : (
                <div className="favorite-grid">
                    {favoriteRaces.map((race) => (
                        <div className="favorite-card" key={race.id}>
                            <RaceCard race={race}/>
                            <button className="remove" onClick={() => dispatch(toggleFavorite({kind: "race", id: race.id}))}>remove</button>
                        </div>
                    ))}
                </div>
            )}

            <p className="hero__subtitle">Gear</p>

            {favoriteGear.length === 0 ? (
                <p className="favoritesText">No favorite gear yet</p>
            ) : (
                <div className="favorite-grid">
                    {favoriteGear.map((g) => (
                        <div className="favorite-card" key={g.id}>
                            <GearCard item={g}/>
                            <button className="remove" onClick={() => dispatch(toggleFavorite({kind: "item", id: g.id}))}>remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </div>
    )
}

export default Favorites;