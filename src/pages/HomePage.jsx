import React from "react";
import Banner from "../components/Banner";
import { places } from "../data/blogData";

import specialGallaryBlog from "../data/specialHome.json"

export default function HomePage() {
  return (

    <div className="max-w-7xl mx-auto px-4 pb-10">




    <div className="grid gap-5 md:grid-cols-[2fr_1fr] lg:h-[40rem]   ">

      <div className="relative ">

      <img
        className=" aspect-square object-cover lg:h-[40rem] w-[100%] cursor-pointer bg-black rounded-2xl"
        src={
          "https://wallpapers.com/images/hd/4k-mountain-l3f04sogeaabr5h0.jpg"
        }
        alt=""
      />

      <h1 className="absolute bottom-14 text-white  pl-4 md:pl-16" >
      <h1 className="  bottom-14   text-xl  " >
      written by {specialGallaryBlog.name}

      </h1>

        <h1 className="  bottom-14   text-4xl  font-bold" >
      {specialGallaryBlog.title}

      </h1>
      </h1>
     

      </div>
     

      <div className=" border border-gray-200 rounded-2xl h-[100%] ">
        <div className="button1 w-1/2 text-center mx-auto mt-5 ">Recent</div>
        {places.map((i) => {
          return (
            <div className="px-2 py-5">
              <div className="flex items-center bg-slate-00 text-start">
                <img src={i.img} className="h-16 w-16 object-cover rounded-full mx-5 bg-red-200" />
                <div>
                  <h1 className="font-semibold text-xl line-clamp-2 ">{i.title}</h1>
                  <p className="text-gray-500" >{i.date}</p>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>


    <Banner/>
    </div>

  );
}
 