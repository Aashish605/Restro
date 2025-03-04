import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Menu_body from "../menu_body/Menu_body";
import { useState, useEffect } from "react";

export default function Menu_swiper() {
  const [items, setItems] = useState(0);

  const orderlists = (num) => {
    setItems(num);
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <>
      <div className="flex justify-center items-center text-black-600 font-semibold text-3xl ">
        Our Menu
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="p-2 w-full h-auto"
              src="images/Todaysspecial.jfif"
              alt="loading"
            />
            <button
              className="Todays-special absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded text-xs sm:text-base py-1 px-2 sm:py-2 sm:px-4 hover:cursor-pointer"
              onClick={() => orderlists(0)}
            >
              Todays special
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="p-2 w-full h-auto"
              src="images/v.jfif"
              alt="loading"
            />
            <button
              className="Veg-khana absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded text-xs sm:text-base py-1 px-2 sm:py-2 sm:px-4 hover:cursor-pointer"
              onClick={() => orderlists(1)}
            >
              Veg set
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="p-2 w-full h-auto"
              src="images/Nonveg.jfif"
              alt="loading"
            />
            <button
              className="Nonveg-set absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded text-xs sm:text-base py-1 px-2 sm:py-2 sm:px-4 hover:cursor-pointer"
              onClick={() => orderlists(2)}
            >
              Nonveg set
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="p-2 w-full h-auto"
              src="images/drinks.jfif"
              alt="loading"
            />
            <button
              className="Drinks-and-suppliments absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded text-xs sm:text-base py-1 px-2 sm:py-2 sm:px-4 hover:cursor-pointer"
              onClick={() => orderlists(3)}
            >
              Drinks
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <Menu_body value={items} />
    </>
  );
}

{
  /*In line no 96 I am passing props in form of items containing numbers like (0,1,2,3) to the Menu_body component  */
}
