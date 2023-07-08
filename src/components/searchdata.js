import { useQuery } from "@tanstack/react-query";
import { React, useState } from "react";
import "../index.css";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const Searchdata = ({ id }) => {
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
    <div className="bg-white">
      <p>{data.title}</p>
      <img src={`${IMAGE_URL}${data.poster_path}`} alt={data.title} />
    </div>
  );
};

export default Searchdata;
