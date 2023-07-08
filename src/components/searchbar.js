import React, { useState } from "react";
import "../index.css";
// import "D:/Projects/movieapp/tailwind.config.js";
const Searchbar = ({ onSearchChange }) => {
  const [searchval, setSearchval] = useState("");
  const [results, setresults] = useState([]);
  const handleChange = (inputval) => {
    const apiurl = `https://api.themoviedb.org/3/search/movie?api_key=817692f6802bf176462fa945d617366a&query=${inputval}`;
    fetch(apiurl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setresults(data.results);
      });
    setSearchval(inputval);
  };

  const handleButtonClick = (id, title) => {
    setSearchval(title);
    setresults([]);
    onSearchChange(id);
  };

  return (
    <div className="flex justify-between">
      <div className="text-xl font-medium">
        <a className="text-white" href="#">
          Movie<span className="text-yellow-500">Corner</span>
        </a>
      </div>
      <div className="relative">
        <input
          className="px-4 py-2 bg-opacity-30 focus:outline-none w-[500px] rounded bg-gray-700 relative text-white"
          type="text"
          placeholder="Enter the movie name"
          value={searchval}
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        <div className="bg-white flex flex-col absolute top-12 w-full rounded divide-y overflow-auto">
          {results.map((result) => {
            return (
              <button
                onClick={() => handleButtonClick(result.id, result.title)}
                className="text-left p-2"
              >
                {result.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Searchbar;
