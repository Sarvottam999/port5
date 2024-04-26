import React from "react";
import { useParams } from "react-router-dom";
import { places } from "../data/blogData";

export default function BlogDetailPage() {
  const { id } = useParams();
    console.log(id);
    const blog = places.find((blog) => blog.id === parseInt(id));

  //   console.log(blog);
  return (
    <div className="md:max-w-5xl w-full mx-auto  px-14">
      <div className=" ">
        <img
          className=" aspect-square object-cover md:h-[30rem] h-[20rem]  w-full cursor-pointer bg-black rounded-2xl"
          src={
            blog.img
          }
        />
      </div>
      <div className=" text-3xl  md:text-6xl font-bold  mt-5 mb-3">
        {blog.title}
      </div>

      <div className="flex   justify-between items-center bg-blue-100 p-2 rounded-md">
        <div className="space-x-1 text-lg  md:space-x-5 md:text-lg text-gray-500 flex  flex-col md:flex-row  ">
        <span className="text-black text-xl ">{blog.name}</span>
        {/* <span>.</span> */}

        <span>{blog.time} min read</span>
        {/* <span>.</span> */}

        <span>{blog.date}</span>

        </div>
       

        <button type="button" className="bg-blue-600 px-10 py-3 rounded-xl text-white font-bold text-xl"> Share</button>
      </div>

      <p className="mt-5"> {blog.detailText}</p>
    </div>
  );
}
