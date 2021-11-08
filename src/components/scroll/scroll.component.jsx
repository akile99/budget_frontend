import React from "react";

import "./scroll.styles.scss";

const Scroll = (props) => {
  return (
    <div className="scroll" key={props.children}>
      {props.children}
    </div>
  );
};

export default Scroll;
