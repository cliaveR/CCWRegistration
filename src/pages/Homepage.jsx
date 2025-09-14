import React from 'react'
import ProductSearchSection from '../components/Homepage/ProductSearchSection'
import Navbar from '../components/Navbar/Navbar'
import ProductTable from '../components/Homepage/ProductTable'
const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <ProductSearchSection/>
        <ProductTable/>
    </div>
  )
}

export default Homepage