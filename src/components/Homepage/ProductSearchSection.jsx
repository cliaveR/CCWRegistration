import React from 'react'
import { Search, Store, Filter, Plus } from "lucide-react"; // optional icons

const ProductSearchSection = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-white shadow-sm rounded-lg'>
        <div className='flex items-center gap-4'>

                <h2 className='text-lg font-semibold text-gray-700'>Products</h2>


            <div className='relative'>
                <Search className='absolute left-3 top-2.5 text-gray-250 w-4 h-4' />
                <input 
                type='text' 
                placeholder='Search..'
                className='ring 2 pl-9 pr-3 py-2 w-64 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500'
                />
            </div>
        </div>

        <div className='flex items-center gap-3'>

                <button className='flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200'>
                    <Store className='w-4 h-4'/>
                    Brand
                </button>


    
                <button className='flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200'>
                    <Filter className='w-4 h-4'/>
                    Category
                </button>
 

                <button className='flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200'>
                    <Plus className='w-4 h-4'/>
                    Add
                </button>


        </div>
    </div>
  )
}

export default ProductSearchSection

