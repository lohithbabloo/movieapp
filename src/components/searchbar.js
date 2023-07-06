import React, { useState } from "react";

import { apikey, url } from "../api";

import "../index.css";

export const Searchbar = ({ retreivedData }) => {
  const [searchval, Setsearchval] = useState("");
  const search = (inputvalue) => {
    const apiurl = url + `&query=${inputvalue}`;
    fetch(apiurl, apikey)
      .then((response) => response.json())
      .then((data) => {
        retreivedData(data);
      });
  };
  const handlechange = (searchData) => {
    Setsearchval(searchData);
    search(searchData);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Enter the movie name"
        value={searchval}
        onChange={(e) => handlechange(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
