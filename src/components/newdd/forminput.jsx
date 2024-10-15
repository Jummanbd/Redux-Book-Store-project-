import React, { useState } from "react";
function AddDynamicInput(){
const [item, setItem] = useState("");
const [arra, setArra] = useState([]);

const hendleClick = (e) => {
    e.preventDefault();
    return item 
}


 let itemed = []
  const nummber = Number(item);

const items =  [ 0, 1, 2, 3, 4, ]

for (let num of items) {
    if (num === nummber ) { break; }
   itemed.push(num)  
  }








return(
    <>
    <form onSubmit={hendleClick}>
    <input type="number" name="name" className="mt-1 px-3 py-[10px] bg-white border shadow-sm border-slate-300  focus:outline-none focus:ring-2 focus:ring-violet-500 block w-full rounded-md sm:text-sm" value={item} onChange={(e) => setItem(e.target.value)} min={1} max={5} />
    <button >Submit</button>
    </form>
    <div>
        {itemed.map((item) => <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-yellow-300" key={item.id}>
    <path fill-rule="evenodd"
    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
    clip-rule="evenodd" />
    </svg>) }
    </div>
    </>
);
}
export default AddDynamicInput;