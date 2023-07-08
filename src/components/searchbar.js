import React, { useState } from "react";
// import "../index.css";

const Searchbar = ({ onSearchChange }) => {
  const [searchval, setSearchval] = useState("");
  const [results, setresults] = useState([]);
  const handleChange = (inputval) => {
    const apiurl = `https://api.themoviedb.org/3/search/movie?api_key=817692f6802bf176462fa945d617366a&query=${inputval}`;
    fetch(apiurl)
      .then((response) => response.json())
      .then((data) => {
        setresults(data.results);
      });
    setSearchval(inputval);
  };
  // const handleClick = (e) => {
  //   onSearchChange(e.target.value);
  // };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter the movie name"
          value={searchval}
          onChange={(e) => handleChange(e.target.value)}
        ></input>
      </form>
      {results.map((result) => {
        return (
          <button onClick={() => onSearchChange(result.id)}>
            {result.title}
          </button>
        );
      })}
    </div>
  );
};
export default Searchbar;
