import { useState } from "react";
import runners1 from "../assets/runners1.jpg";
import runners2 from "../assets/runners2.jpg";
import runners3 from "../assets/runners3.jpg";
import runners4 from "../assets/runners4.jpg";
import runners5 from "../assets/runners5.jpg";
import runners6 from "../assets/runners6.jpg";

const Slider = () => {
    const images = [runners1, runners2, runners3, runners4, runners5, runners6];
    const [index, setIndex] = useState(0);

    const prev = () => {
        if (index === 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(index - 1);
        }  
    };

    const next = () => {
        if (index === images.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };
    
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
        touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        touchEndX = e.changedTouches[0].screenX;

        if (touchStartX - touchEndX > 50) {
        next(); // свайп влево
        }

        if (touchEndX - touchStartX > 50) {
        prev(); // свайп вправо
        }
    };

    return (
        <section className="slider" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <button className="prev" onClick={prev}>←</button>
            <img src={images[index]} alt="runners"/>
            <button className="next" onClick={next}>→</button>
        </section>
    )
}

export default Slider;