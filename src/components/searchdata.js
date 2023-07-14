import { useQuery } from "@tanstack/react-query";
import { React } from "react";
import "../index.css";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const Searchdata = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=817692f6802bf176462fa945d617366a`
      );

      const data = await res.json();
      return data;
    },
  });
  const { data: castData, isLoading: Loading } = useQuery({
    queryKey: ["cast"],
    queryFn: async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=817692f6802bf176462fa945d617366a`
      );
      const castData = await res.json();
      console.log(castData);
      return castData;
    },
  });

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (Loading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return null;
  }
  if (!castData) {
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
      <div className="grid grid-flow-col overflow-auto gap-10 mt-5" id="cast">
        {castData.cast.map((item) => {
          return (
            <div className="w-[200px]">
              <img
                src={`${IMAGE_URL}${item.profile_path}`}
                alt=""
                className="border border-yellow-500"
              />
              <p>
                <span className="text-yellow-500 text-lg">Name</span>:{" "}
                {item.name}
              </p>
              <p>
                <span className="text-yellow-500 text-lg">
                  Character Played
                </span>
                : {item.character}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Searchdata;
