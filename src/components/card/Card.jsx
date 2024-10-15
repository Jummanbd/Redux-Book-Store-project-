import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({booklist, itemDelete, selected}) => {
  const navigate = useNavigate()
  const {id, author, featured, name, price,  thumbnail, rating} = booklist;
  
  
  // Editing
  const EditHandle = () => {
    navigate(`/edit/${id}`)
  };

  // item delete
  const bookItemDelete =() => {
    itemDelete({id})
  };

  let itemed = []
  const nummber = Number(rating);

const items =  [ 0, 1, 2, 3, 4, ]

for (let num of items) {
    if (num === nummber ) { break; }
   itemed.push(num)  
  }

  return (
<>    
{  selected ===true  ||  featured === true ? (    <div href="#" className="flex flex-col  bg-white lg:max-w-md md:max-w-lg  rounded-lg shadow-lg md:flex-row relative overflow-hidden " key={id}>
          <img className="object-cover w-full rounded-t-lg h-[260px] md:w-[170px] md:rounded-none md:rounded-s-lg"src={thumbnail} alt=""/>
          
          <div className="flex flex-col justify-between px-4 py-4 leading-normal w-full relative">
          <div className="flex items-center justify-between">
                    {featured === true ? ( <span className="lws-badge border border-blue-600 rounded-lg text-sm text-blue-600 px-2 py-1">Featured</span> ) : null}
                    
                    <div className="text-gray-500 space-x-2 justify-end absolute right-3 top-3">
                      <button className="lws-edit" onClick={EditHandle}>
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                      </button>
                      <button className="lws-deleteBook" onClick={bookItemDelete}>
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </button>
                    </div>
          </div>

          <div className="space-y-2 mt-8 h-full">
              <h4 className="lws-book-name text-base font-semibold ">{name}</h4>
              <p className="lws-author text-base">{author}</p>
              <div className="flex items-center mt-2.5 mb-5">
              {itemed.map((item) => <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-yellow-300" key={item.id}>
                <path fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd" />
               </svg>) }
              </div>
              <p className="lws-price text-lg font-semibold text-blue-500"> {`BDT : ${price}`}</p>
          </div>
          </div>
    </div>) : null
    }
    </>


 
  )
}

export default Card;
