import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userFeatured } from '../../features/booklist/bookSlice';

const Header = () => {
  const [active, setActive] = useState("all");
 const dispatch = useDispatch();
  const handleClick = (event) => {
    setActive(event.target.value);
    console.log(event.target.value);
    
    if(event.target.value === "all"){
      dispatch(userFeatured(false));
    } else if(event.target.value === "featured"){
      dispatch(userFeatured(true));
      
    } 
  }
  
  return (
    <div className='py-12 px-8  container mx-auto'>
        <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
        <button className={`lws-filter-btn active-filter rounded-full   px-5 py-1 ${active === 'all' ? "bg-blue-700 text-white" : "text-blue-700 border border-blue-700"}`} value={"all"} onClick={handleClick}>All</button>
        <button className={`lws-filter-btn rounded-full  text-blue-700 border border-blue-700 px-5 py-1   ${active === 'featured' ? "bg-blue-700 text-white" : null}` } value={"featured"} onClick={handleClick}>Featured</button>
        </div>
    </div>
    </div>

  )
}

export default Header
