import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSearch } from '../../features/booklist/bookSlice';
import logoImg from '../../images/logo.svg';
const Navbar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  
  // search bar
  useEffect(() => {
    dispatch(
      userSearch(search)
    )
  },[dispatch, search])
  
  return (
    <nav className="py-4 2xl:px-6">
    <div className="container mx-auto flex items-center justify-between px-8">
      <Link to={"/"}>
      <img src={logoImg} width="150px" alt='logo img' className="object-contain" />
      </Link>

      <ul className="hidden md:flex items-center space-x-6">
        <Link  to= '/'className="font-semibold cursor-pointer"  id="lws-bookStore">
          <li>Book Store</li>
        </Link>
        <Link to='/add' className="cursor-pointer"  id="lws-addBook">
          <li>Add Book</li>
        </Link>
      </ul>

      <form className="flex items-center">
      <div className="group relative rounded-md bg-white">
          <svg width="20" height="20" fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400  pointer-events-none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
            </path>
          </svg>
          <input id="1" type="text" className="peer h-10 w-full rounded-md bg-gray-50 py-2 pl-10  outline-none ring-1  ring-gray-300  focus:bg-white focus:ring-2 focus:ring-violet-500"  placeholder="Filter books..." value={search} onChange={(e) => setSearch(e.target.value)}/>       
           </div>
      </form>
    </div>
  </nav>
  )
}

export default Navbar
