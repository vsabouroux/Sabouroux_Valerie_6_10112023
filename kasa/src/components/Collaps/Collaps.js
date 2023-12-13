import React, { useState } from "react";
import arrow_down from "../../assets/arrow_down.png";
import arrow_up from "../../assets/arrow_up.png";
import "./Collaps.scss";

function CollapseItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  // déclaration d'une variable "poignée" pour la bascule en ouvert ou fermé du menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="CollapseItem">
      <div className="CollapseHeader" onClick={handleToggle}>
        <h2>{title}</h2>
        <span className="Arrow">
          {isOpen ? (
            <img src={arrow_down} alt="Arrow Down" />
          ) : (
            <img src={arrow_up} alt="Arrow Up" />
          )}
        </span>
      </div>
      {isOpen && <div className="CollapseContent">{content}</div>}
    </div>
  );
}

export default CollapseItem;
