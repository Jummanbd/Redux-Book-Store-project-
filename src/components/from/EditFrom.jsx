import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookUpdateMutation } from '../../features/booklist/bookApi';

const EditFrom = ({item}) => {
  console.log(item);
  
 const [bookUpadte] =useBookUpdateMutation();
 const [bookName, setBookName] = useState(item.name);
 const [author,setAuthor] = useState(item.author);
 const [imgUrl, setImgUrl] = useState(item.thumbnail);
 const [price, setPrice] = useState(item.price);
 const [rating, setRating] = useState(item.rating);
 const [featured, setFeatured] = useState(item.featured);

 
 const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    bookUpadte({
      id:item.id,
      name:bookName,
      author:author,
      thumbnail:imgUrl,
      price:price,
      rating:rating,
      featured:featured
    })
 navigate("/")
};
  return (
    <form className="bg-white  px-12 py-10 drop-shadow-lg" onSubmit={handleSubmit}>

    <label className="block ">
    <span className=" block   text-slate-700 text-base font-medium">
    Book Name
    </span>
    <input type="text" name="name" className="mt-1 px-3 py-[10px] bg-white border shadow-sm border-slate-300  focus:outline-none focus:ring-2 focus:ring-violet-500 block w-full rounded-md sm:text-sm"  required value={bookName} onChange={(e) => setBookName(e.target.value)} />
    </label>

    <label className="block mt-5">
    <span class=" block   text-slate-700 text-base font-medium">
    Author
    </span>
    <input type="text" name="name" class="mt-1 px-3 py-[10px] bg-white border shadow-sm border-slate-300  focus:outline-none focus:ring-2 focus:ring-violet-500 block w-full rounded-md sm:text-sm"  required value={author} onChange={(e) => setAuthor(e.target.value)}/>
    </label>

    <label className="block mt-5">
    <span className=" block   text-slate-700 text-base font-medium">
    Image Url
    </span>
    <input type="text" name="name" className="mt-1 px-3 py-[10px] bg-white border shadow-sm border-slate-300  focus:outline-none focus:ring-2 focus:ring-violet-500 block w-full rounded-md sm:text-sm"  required value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}/>
    </label>

    <div className="grid grid-cols-2 gap-8 pb-4 mt-5">
        <label className="block">
            <span className=" block   text-slate-700 text-base font-medium">
            Price
            </span>
            <input type="number" name="name" className="mt-1 px-3 py-[10px] bg-white border shadow-sm border-slate-300  focus:outline-none focus:ring-2 focus:ring-violet-500 block w-full rounded-md sm:text-sm"  required value={price} onChange={(e) => setPrice(e.target.value)}/>
        </label>

        <label className="block ">
            <span className=" block   text-slate-700 text-base font-medium">
            Rating
            </span>
            <input type="number" name="name" className="mt-1 px-3 py-[10px] bg-white border shadow-sm border-slate-300  focus:outline-none focus:ring-2 focus:ring-violet-500 block w-full rounded-md sm:text-sm"  required value={rating} onChange={(e) => setRating(e.target.value)}/>
        </label>
    </div>

    <div className="flex items-center mt-1">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 border-slate-300 " checked={featured} onClick={(e) => setFeatured(e.target.checked)} />
     <label for="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
    </div>

    <button type="submit" className="flex justify-center mx-auto mt-7 w-full rounded-lg bg-blue-700 text-white px-5 py-2" id="lws-submit">Add Book</button>
</form>


  )
}

export default EditFrom;
