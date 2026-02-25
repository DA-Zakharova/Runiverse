import './RaceCard.css';
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";

const RaceCard = ({race}) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.items);

    const isFavorite = favorites.some(
        (item) => item.kind === "race" && item.id === race.id
    );

    return (
        <div className="race-card">
            <div className="race-content">
                <img className="raceImg" alt="city" src={race.image}/>
                <h2>{race.name}</h2>
                <p>City: {race.city}</p>
                <p>Date: {race.date}</p>
                <p>Distance: {race.distance}</p>
                <button onClick={() => dispatch(toggleFavorite({kind: "race", id: race.id}))}>
                    { isFavorite ? "saved ✔️" : "add to favorites ⭐️"}
                </button>
            </div>
        </div>
    )
}

export default RaceCard;