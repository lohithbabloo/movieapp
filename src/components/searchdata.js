import { useQuery } from "@tanstack/react-query";
import React from "react";
// import "../index.css";

const Searchdata = ({ id }) => {
  // const movies = fetch(
  //   `https://api.themoviedb.org/3/search/movie?api_key=817692f6802bf176462fa945d617366a&query=${result}`
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     setvalue(data.results);
  //   });
  const { data, isLoading } = useQuery({
    queryKey: ["movie", id],
    queryFn: () =>
      (async () => {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=817692f6802bf176462fa945d617366a`
        );
        const data = await res.json();
        return data;
      })(),
  });
  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (!data) {
    return null;
  }
  return (
    <div>
      <p>{data.title}</p>
    </div>
  );
};

export default Searchdata;
