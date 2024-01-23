import React, { useEffect, useState, useContext } from "react";
import "./Category.css";
import { categories } from "./CategoriesData.jsx";
import { useNavigate } from "react-router-dom";

import Cards from "./Cards";
import Chips from "./Chips";
const Category = () => {
  const [select, setSelect] = useState([]);
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const handleSelect = (elem) => {
    setSelect((select) => [...select, elem]);
  };

  const handleSubmitSelection = () => {
    if (select.length < 3) {
      setError(true);
    } else {
      setError(false);
      window.localStorage.setItem("userGenere", JSON.stringify(select));
      navigate("/home");
    }
  };
  return (
    <div className="category_main">
      <div className="category_leftcontent">
        <h3>Super app</h3>
        <h1>Choose your entertainment category</h1>
        <div className="selected_categories">
          <div className="selected_gener">
            <Chips select={select} setSelect={setSelect} />
          </div>
        </div>
      </div>
      <div className="categories">
        <div className="cards">
          {categories.map((elem, i) => {
            return (
              <Cards
                key={i}
                index={elem.value}
                name={elem.name}
                background={elem.background}
                image={elem.image}
                handleSelect={handleSelect}
              />
            );
          })}
        </div>
        <div className={error ? `` : `hide`}>
          <p className="error"> * Please select minimum 3 category to save</p>
        </div>
        <button className="next_btn" onClick={handleSubmitSelection}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Category;
