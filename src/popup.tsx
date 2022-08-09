import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home";

const Popup = () => {
  return <Home />;
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
