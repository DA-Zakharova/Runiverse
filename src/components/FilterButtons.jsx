import './FilterButtons.css';

function FilterButtons({ options, value, onChange }) {
    return (
        <div className="plans-buttons">
        {options.map((option) => (
            <button
            key={option}
            className={value === option ? "filter-btn filter-btn-active" : "filter-btn"}
            onClick={() => onChange(option)}
            >
            {option}
            </button>
        ))}
        </div>
    );
}

export default FilterButtons;