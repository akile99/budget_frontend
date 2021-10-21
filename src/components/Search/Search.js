import React, { useState, useEffect } from "react";

import Select from "react-select";
import { globalVars } from "../../hooks/global";

function Search(props) {
  const [categories, setCategories] = useState([]);
  const categoryList = [];

  function handleChange(data) {
    props.onChange(data.value, data.label);
    //setClabel(data.label)
  }

  useEffect(() => {
    try {
      fetch(globalVars.HOST + "category")
        .then((response) => response.json())
        .then((data) => {
          data.map((i) => {
            categoryList.push({ label: i.category, value: i.catid });
          });
        })
        .then(setCategories(categoryList));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="w-30">
      <Select onChange={handleChange} options={categories} />
    </div>
  );
}

export default Search;
