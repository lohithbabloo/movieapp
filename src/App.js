import React, { useState } from "react";
import Searchbar from "./components/searchbar.js";
import Searchdata from "./components/searchdata.js";
import "./index.css";
function App() {
  const [listdata, Setlistdata] = useState([]);
  const handleData = (data) => {
    Setlistdata(data.results);
    // console.log(data);
  };

  return (
    <div className="container">
      <div className="search">
        <Searchbar retreivedData={handleData} />
      </div>
      <div className="searchresults">
        {listdata && <Searchdata result={listdata} />}
      </div>
    </div>
  );
}

export default App;
