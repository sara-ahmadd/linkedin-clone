import React from "react";
import "./loaderStyles.css";

const Loader = () => {
  return ReactDOM.createPortal(
    <>
      <div class="container">
        <div class="part1">Linked</div>
        <div class="part2">in</div>
      </div>
      <div class="loader">
        <div class="loading"></div>
      </div>
    </>,
    document.getElementById("loader")
  );
};

export default Loader;
