"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewProducts = () => {

  const [products, setProducts] = useState([])
 
useEffect(()=>{

   axios.get('http://192.168.0.100:8000/api/products/get').then(
    response =>{
      // setProducts(response.data)
      console.log(response.data.data)
      setProducts(response.data.data)
    }
    )
    // console.log(products)


},[])

  return (
    <div>
      <div className=' border w-screen  m-auto p-3 justify-center items-center text-center h-screen bg-gradient-to-b from-blue-200   to-slate-200'>

        <h1>List of Products</h1>
        <div className='flex flex-row border bg-slate-100 rounded-md '>
            <div className='p-1 w-1/12 '>Serial #</div>
            <div className='p-1 ml-2 w-2/12 '>Product Name</div>
            <div className='p-1 ml-2 w-2/12 '>Category</div>
            <div className='p-1 ml-2 w-1/12 '>Brand</div>
        </div>
        {
        products &&
        products.map((item, index) => (
            <div className='flex flex-row p-1'>
                <div className='p-1 w-1/12 ml-2 '>{item.serialno}</div>
                <div className='p-1 w-2/12 ml-2'>{item.name}</div>
                <div className='p-1 w-2/12 ml-2'>{item.catagory}</div>
                <div className='p-1 w-1/12 ml-2'>{item.brand}</div>
            </div>
        ))}

        </div>
      </div>
  )
}

export default ViewProducts