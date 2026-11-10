import React from "react";

const Cards = ({ item }) => {
  // console.log(item)

  return (
    <>
      <div>
        <div className="card bg-base-100 w-full shadow-xl transition-transform hover:scale-105 duration-300 ease-in-out dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="books image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline px-2 py-1 rounded-full font-sans font-medium">
                Rs. {item.price}
              </div>
              <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
