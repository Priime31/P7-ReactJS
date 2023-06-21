import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    fas,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./SlideShow.scss";

library.add(fas, faChevronLeft, faChevronRight);

const SlideShow = ({ slides }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        if (slides[slideIndex + 1] === undefined) {
            setSlideIndex(0);
        } else {
            setSlideIndex(slideIndex + 1);
        }
    };
    const previousSlide = () => {
        if (slides[slideIndex - 1] === undefined) {
            setSlideIndex(slides.length - 1);
        } else {
            setSlideIndex(slideIndex - 1);
        }
    };

    return (
        <div className="SlideShow">
            <img src={slides[slideIndex]} alt="" />
            <button onClick={nextSlide}>
                <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </button>
            <button onClick={previousSlide}>
                <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            </button>
            <p>
                {slideIndex + 1}/{slides.length}
            </p>
        </div>
    );
};

export default SlideShow;
