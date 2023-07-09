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
    <div className="text-white">
      <div
        className=" flex justify-center
       "
      >
        <img
          src={`${IMAGE_URL}${data.poster_path}`}
          alt={data.title}
          width={300}
          className=" border border-yellow-200"
        />
      </div>
      <div className="m-8 text-center ">
        <p className="text-white text-3xl">
          <span className="text-yellow-500">Title:</span>&ensp;
          {data.title}
        </p>
      </div>
      <div>
        <p className="text-3xl mb-2 text-yellow-500">OverView</p>
        <p className="text-lg mb-6">{data.overview}</p>
        <p>
          <span className="text-yellow-500 text-lg">Release Date</span>:&ensp;
          {data.release_date}
        </p>
        <p>
          <span className="text-yellow-500 text-lg">User Rating</span>:&ensp;
          {data.vote_average}
        </p>
        <p>
          <span className="text-yellow-500 text-lg">Total vote count</span>
          :&ensp;{data.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Searchdata;
