import React from "react";

export const Searchdata = ({ result }) => {
  const showdata = () => {};

  return (
    <div className="searchfilter">
      {result.map((item, id) => {
        console.log(item);
        return (
          <div className="filtered">
            <button onClick={showdata}>{item.title}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Searchdata;
