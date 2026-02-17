import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";

const GearCard = ({item}) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.items);

    const isFavorite = favorites.some(
        (element) => element.kind === "item" && element.id === item.id
    );

    return (
        <div className="race-card">
            <div className="race-content">
                <img className="gearImg" alt="city" src={item.image}/>
                <h2>{item.name}</h2>
                <p>$ {item.price}</p>
                <p>{item.description}</p>
                <button onClick={() => dispatch(toggleFavorite({kind: "item", id: item.id}))}>
                    { isFavorite ? "saved ✔️" : "add to favorites ⭐️"}
                </button>
            </div>
        </div>
    )
}

export default GearCard;