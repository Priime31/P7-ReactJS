import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./collapser.scss";

library.add(fas, faChevronUp);

const Collapser = ({ content, title }) => {
    const [isToggled, setIsToggled] = useState(true);
    let collapserStyle = {
        display: 'block'
    };
    const collapserStyleChanger = () => {
        isToggled
            ? (collapserStyle = {
                  display: "block",
              })
            : (collapserStyle = {
                  display: "none",
              });
    };

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    collapserStyleChanger();

    return (
        <div className="collapser_block">
            <div key={title.index} className="titleButton_block">
                <p>{title}</p>
                <button value={isToggled} onClick={handleToggle}>
                    <FontAwesomeIcon className={`button_style ${isToggled ? 'rotate' : ''}`} icon="fa-solid fa-chevron-up" />
                </button>
            </div>

            <div style={collapserStyle} className="collapser_div">
                {content}
            </div>
        </div>
    );
};

export default Collapser;
