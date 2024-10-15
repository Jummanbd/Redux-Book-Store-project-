import React from 'react';
import { useSelector } from 'react-redux';
import { useGetBookslistQuery, useItemDeleteMutation } from '../../features/booklist/bookApi';
import Error from '../ui/Error';
import Card from './Card';
const Cards = () => {
  const {data:booksdata, isError, isLoading,error} = useGetBookslistQuery();
  const [itemDelete] = useItemDeleteMutation()
  const {select} = useSelector((state) => state.booklist);
  const {search} = useSelector((state) => state.booklist);
  
    // decide what to render
    let content = null;

    if(isLoading){
      content =  <div>Loading...</div>
  
    } else if(!isLoading && isError){
      content = <Error message={error?.data}/>
    } else if(!isLoading && !isError && booksdata.length === 0){
      content = <div>Not found!</div>
    } else if(!isLoading && !isError && booksdata.length > 0) {
      content = booksdata.map((item) => <Card booklist={item} key={item.id} itemDelete = {itemDelete} selected = {select === item.featured}/>);
    }
    if(search.length > 0){
      const searchItems = booksdata.filter((itemed) => itemed.name.toLowerCase().includes(search.toLowerCase()));
      content =  searchItems.map((item) => <Card booklist={item} key={item.id} itemDelete = {itemDelete} selected = {select === item.featured}/>);
      
    }
  
  return (
    <div className=" px-8 space-y-6 md:space-y-0 md:grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6 container mx-auto">
     {content}
  </div>
  )
}

export default Cards
