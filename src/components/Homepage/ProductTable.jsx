import { Edit, MoreVertical, Trash } from 'lucide-react';
import React, { useState } from 'react'
import '../../styles/ProductTable.css'

const ProductTable = () => {
    const [openRow, setOpenRow] = useState(null);

    const products = [
    {
      id             : 101,
      status         : "102391283",
      name           : "CTee",
      time_reserved:    10,
    },
    {
      id           :102,
      status       : "120398123",
      name         : "Europmat",
      time_reserved: 25
    },
  ];
  return (
    <div className='overflow-x-auto bg-white rounded-lg shadow'>
        <table className='w-full text-left border-collapse'>
            <thead className='bg-gray-100 text-gray-600 text-sm'>
                <tr>
                    <th className='p-3'>id</th>
                    <th className='p-3'>status</th>
                    <th className='p-3'>name</th>
                    <th className='p-3'>time_reserved</th>
                    <th className='p-3'></th>
                </tr>
            </thead>

            <tbody>
                {
                    products.map((p)=>(
                        <tr key={p.id} className='border-b hover:bg-gray-50'>
                            <td className='p-3'>{p.id}</td>
                            <td className='p-3'>{p.status}</td>
                            <td className='p-3'>{p.name}</td>
                            <td className='p-3'>{p.time_reserved}</td>

                            <td className='relative p-3 text-right'>
                                <button onClick={() => setOpenRow(openRow === p.id ? null : p.id)}>
                                     <MoreVertical />
                                </button>

                                {openRow === p.id && (
                                <div className="absolute right-8 top-0 bg-white border rounded-lg shadow-md flex">
                                        <button className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:bg-gray-100">
                                            <Edit size={16} /> Edit
                                        </button>
                                        <button className="flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-gray-100">
                                            <Trash size={16} /> Delete
                                        </button>
                                </div>
                                )}

                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductTable