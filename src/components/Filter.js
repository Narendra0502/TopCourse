import React from 'react'

const Filter = ({filterData}) => {
  return (
    <div className='w-11/12 max-w-max flex flex-wrap justify-center space-x-4 gap-y-4 mx-auto my-4'>
      {
        filterData.map((data)=>{
           return( <button className='rounded border-2 shadow-md text-lg hover:bg-opacity-50 py-1 text-red-950 
           transition-all duration-300  font-medium px-5 bg-yellow-500'key={data.id}>
            {data.title}
        </button>)
        })
      }
    </div>
  )
}

export default Filter
