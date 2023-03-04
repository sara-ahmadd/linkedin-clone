import React from "react";
import "./loaderStyles.css";

const Loader = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="part1">Linked</div>
        <div className="part2">in</div>
      </div>
      <div className="loader">
        <div className="loading"></div>
      </div>
    </div>
  );
};

export default Loader;
