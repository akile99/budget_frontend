import React from "react";
import { useSelector } from "react-redux";

import { selectCategories } from "../../redux/category/category.selector";
import Select from "react-select";

const Search = (props) => {
  const categories = useSelector(selectCategories);

  function handleChange(data) {
    props.onChange(data);
  }

  return (
    <div className="w-30">
      <Select onChange={handleChange} options={categories.categoryList} />
    </div>
  );
};

export default Search;
