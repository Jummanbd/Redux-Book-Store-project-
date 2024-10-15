import React from 'react';
import { useParams } from 'react-router-dom';
import EditFrom from '../../components/from/EditFrom';
import Error from "../../components/ui/Error";
import { useGetBooklistIdQuery } from '../../features/booklist/bookApi';
const Edit = () => {
  const {id} = useParams();

  const {data, isLoading, isError, error} = useGetBooklistIdQuery(id) || {};
    console.log(data);
    
  let content = null;
  
  if(isLoading) {
    content =  <div>Loading...</div>
  } else if(!isLoading && isError) {
    content = <Error message={error?.data}/>
  } else if(!isLoading && !isError && data?.id){
    content = <EditFrom item = {data}/>
  }
  return (
    <main className="py-6 2xl:px-6 ">
        <div className="container mx-auto">
            <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 className="mb-8  font-bold text-center text-3xl">Add New Book</h4>
               {content}
            </div>
        </div>
    </main>
  )
}

export default Edit
