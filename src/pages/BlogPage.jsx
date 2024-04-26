import React from 'react'
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import { places } from '../data/blogData';
import BlogDetailPage from './BlogDetailPage';

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-10 ">

<PageTitle text={'Blogs'} subtext={"Read / Injoy"}/>
   

    <div className="w-full  grid gap-24 grid-cols-1 md:grid-cols-3 text-black">
    {places.length > 0 && places.map(place => (
          <Link to={`/port5/blogs/detail/${place.id}`}  >
            <div className="  mb-2 rounded-2xl  ">
            <img className="rounded-2xl object-cover  h-[300px] md:w-[300px]  w-full" src={place.img} alt=""/>

            </div>
            <h2 className="font-bold  text-2xl line-clamp-2 mt-5 ">{place.title}</h2>
            <h3 className="text-lg text-gray-500 line-clamp-3">{place.detailText}</h3>
            <div className="mt-1 space-x-2">
              <span className="text-lg">{place.name}</span> 
              <span className="text-sm">{place.date}</span>
            </div>
          </Link>
        ))}

    </div>
    
    </div>
  )
}



