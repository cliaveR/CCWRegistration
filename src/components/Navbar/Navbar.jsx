import React from 'react'
import rold from '../../assets/rold.png'
import picture_icon from '../../assets/picture-icon.png'
import bell from '../../assets/bell.png'
import '../../styles/Navbar.css'
export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 bg-gray-100 shadow-lg'> 
        <img src={rold} alt="rold" className='h-10 w-auto' />

        <div className='flex items-center gap-6'>
            <div>
                <img src={bell} alt="rold" className='h-10 w-auto' />
            </div>

            <div>
                <img src={picture_icon} alt="rold" className='h-10 w-auto' />
            </div>
        </div>

    </div>
  )
}
