import React, { useState } from "react";
import "./Collaps.scss";

function CollapseItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="CollapseItem">
      <div className="CollapseHeader" onClick={handleToggle}>
        <h2>{title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="CollapseContent">{content}</div>}
    </div>
  );
}

export default CollapseItem;
