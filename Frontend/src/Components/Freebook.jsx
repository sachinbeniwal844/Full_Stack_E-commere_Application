import axios from "axios";
import React, { useEffect, useState } from "react";
// import { List } from "../Data/Data";
import Cards from "./Cards";

const Freebook = () => {
   const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        // const res = await axios.get("http://localhost:1000/book");
        const res = await axios.get("https://full-stack-e-commere-application.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const filterData = book.filter((data) => data.category === "Free");
  //   console.log(filterData);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla
          non suscipit, iure neque earum?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 mt-6 mb-6">
          {filterData.map((item) => (
            <div key={item.id}>
              <Cards item={item} />
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Freebook;

//  <div className='flex flex-wrap gap-10 justify-center items-center'>
//         {filterData.map((data)=><div key={data.id}>
//             <img src={data.image} alt="books image" className='w-100 h-100 object-cover'/>
//         </div>)}
//     </div>
