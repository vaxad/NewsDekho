import React, { Component } from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center my-5">
      <div
        className="spinner-grow text-secondary my-5"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
