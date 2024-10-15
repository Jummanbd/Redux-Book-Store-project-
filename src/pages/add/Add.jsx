import React from 'react'
import From from '../../components/from/From'

const Add = () => {
  return (
    <main className="py-6 2xl:px-6 ">
        <div className="container mx-auto">
            <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 className="mb-8  font-bold text-center text-3xl">Add New Book</h4>
              <From/>
            </div>
        </div>
    </main>
  )
}

export default Add
