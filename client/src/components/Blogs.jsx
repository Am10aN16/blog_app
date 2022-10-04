import React from "react";

const Blogs= ({ category, title, blog, current  , tag , comments}) =>


{
  const colours = [
    "#5B84B1FF",
    "#2A363B ",
    "#A7226E",
    "#FF847C",
    "#45ADA8",
    "#E84A5F",
  ];

  // const blogs = 

  return (
    <>
      <div
        style={{ backgroundColor: colours[current % 6] }}
        class="card text-white mb-3"
      >
        <div class="card-header">#{category} </div>
        <div class="card-body">
          <h5 style={{ fontWeight: "bolder" }} class="card-title">
         
            {title}
          </h5>
          <p class="card-text">{blog}</p>
        </div>
      </div>
    </>
  );
};

export default Blogs;