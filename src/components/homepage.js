import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const Homepage = ({ onitemselect }) => {
  const { isLoading, data } = useQuery({
    queryKey: ["value"],
    queryFn: async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=817692f6802bf176462fa945d617366a`
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  const getId = (id) => {
    onitemselect(id);
  };
  return (
    <div className="grid grid-cols-2 gap-y-5 md:grid-cols-4">
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        data.results.map((movie, id) => {
          return (
            <div className="">
              <button
                onClick={() => {
                  getId(movie.id);
                }}
              >
                <img src={`${IMAGE_URL}${movie.poster_path}`} width={280}></img>
                <p className="text-white text-left">{movie.title}</p>
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Homepage;
