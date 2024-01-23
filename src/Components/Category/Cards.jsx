import React, { useState } from "react";
import "./Category.css";

const Cards = ({ name, background, image, handleSelect }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleIsSelected = () => {
    setIsSelected(true);
  };

  return (
    <>
      <div
        className={isSelected ? `categories_item selected` : `categories_item`}
        style={{ background: `${background}` }}
        onClick={() => {
          handleSelect(name);
          handleIsSelected();
        }}
      >
        <h2>{name}</h2>
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default Cards;
