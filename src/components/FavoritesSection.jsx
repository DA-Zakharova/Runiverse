import './FavoritesSection.css';

function FavoritesSection({ title, emptyText, items, renderItem }) {
    return (
        <div className="favoritesSection">
        <p className="hero__subtitle">{title}</p>

        {items.length === 0 ? (
            <p className="favoritesText">{emptyText}</p>
        ) : (
            <div className="favorite-grid">
            {items.map(renderItem)}
            </div>
        )}
        </div>
    );
}

export default FavoritesSection;