import React, { useState } from "react";
import Searchbar from "./components/searchbar.js";
import Searchdata from "./components/searchdata.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import Homepage from "./components/homepage.js";
const queryClient = new QueryClient();

const App = () => {
  const [searchval, setsearchval] = useState();

  const getmovieid = (id) => {
    setsearchval(id);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-[80%] mx-auto my-8 align-middle">
        <Searchbar onSearchChange={getmovieid} />
        {searchval ? (
          <Searchdata id={searchval} />
        ) : (
          <Homepage onitemselect={getmovieid} />
        )}
      </div>
    </QueryClientProvider>
  );
};

export default App;
