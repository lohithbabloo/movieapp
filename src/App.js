import React, { useState } from "react";
import Searchbar from "./components/searchbar.js";
import Searchdata from "./components/searchdata.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import "./index.css";
const queryClient = new QueryClient();

function App() {
  const [searchval, setsearchval] = useState();

  const handlesearchchange = (inputdata) => {
    setsearchval(inputdata);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Searchbar onSearchChange={handlesearchchange} />
        {searchval && <Searchdata id={searchval} />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
