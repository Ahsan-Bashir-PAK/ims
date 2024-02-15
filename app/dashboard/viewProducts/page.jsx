"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Link from 'next/link';
const ViewProducts = () => {

  const [products, setProducts] = useState([])
  const [items, setItems] = useState("")
 
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

const defaults = {
  serialno: "",
  name: "",
  catagory: "",
  brand: "",
}
const updateData =(id)=>{
  // alert(id);
  axios.patch(`http://192.168.0.100:8000/api/products/update/${id}`,data).then(
    
   response=>{
 alert("data updated")
    //  if (response){
    //    alert(response.data)
    //    setData(defaults)
    //  }
     
   }).catch(
     (reson)=>{
     alert(Object.values(reson.response.data).map((item)=>(
       
       item[0]
       
       )))
     }
   )
 }

const [data, setData] = useState(defaults)

  return (
    <div>
      <div className=' border w-screen m-auto  justify-center items-center text-center h-screen bg-gradient-to-t from-teal-500   to-blue-200 flex flex-row'>
        
        <div className='w-6/12 h-screen p-3 '>
      
        <div className='flex flex-row  text-white bg-blue-500  '>
            <div className='p-1 w-1/12 '>Sr. #</div>
            <div className='p-1 ml-2 w-3/12 '>Product Name</div>
            <div className='p-1 ml-2 w-3/12 '>Category</div>
            <div className='p-1 ml-2 w-3/12 '>Brand</div>
            <div className='p-1 ml-2 w-1/12 '>Action</div>
        </div>
        {
        products &&
        products.map((item, index) => (
            <div className='flex flex-row p-1 bg-slate-50 border border-b border-blue-100'>
                
                <div className='p-1 w-1/12 ml-2 '>{item.serialno}</div>
                <div className='p-1 w-3/12 ml-2'>{item.name}</div>
                <div className='p-1 w-3/12 ml-2'>{item.catagory}</div>
                <div className='p-1 w-3/12 ml-2'>{item.brand}</div>
                <div className='p-1 w-1/12 ml-2 hover:cursor-pointer'><span  className='hidden'>{item.id}</span> <MdEdit size={20} onClick={()=>setItems(item)}/></div>
            </div>
        ))}

        </div>
          
        <div className='w-6/12  h-screen bg-gradient-to-b from-orange-200   to-slate-200 border border-black'>
          
          <form action="" method="post">
                <div className=' justify-start border border-blue-300 p-2 w-10/12 rounded-md items-start m-auto mt-10 bg-gradient-to-b from-blue-300   to-slate-100 shadow-md shadow-blue-800 '>
                  <div className='flex flex-row bg-blue-100 justify-center items-center rounded-md'>
                <MdOutlineProductionQuantityLimits size={25} color='#123456' />
                <h1 className='font-bold text-blue-900  p-2 '> Product Registeration </h1>
                  </div>
                  <div className=' flex flex-row mt-2'>
                      <div className=' w-4/12 '><label htmlFor="serial" className='  '>Product ID</label></div>
                      <div className='flex'><input type="text" name="" id="serial" className=' rounded-sm '
                      value ={items.id}
                      onChange={(e)=>setData({...items,id:e.target.value})}
                      disabled
                      /></div>
                    </div>
                    <div className=' flex flex-row mt-2'>
                      <div className=' w-4/12 '><label htmlFor="serial" className='  '>Serial Number</label></div>
                      <div className='flex'><input type="text" name="" id="serial" className=' rounded-sm '
                      value ={items.serialno}
                      onChange={(e)=>setData({...items,serialno:e.target.value})}/></div>
                    </div>
                    <div className=' flex flex-row mt-1'>
                      <div className=' w-4/12'><label htmlFor="product_name" className=' '>Product Name</label></div>
                      <div><input type="text" name="" id="product_name" className='border'
                      value ={items.name}
                      onChange={(e)=>setData({...items,name:e.target.value})}
                      /></div>
                    </div>
                    <div className=' flex flex-row mt-1'>
                      <div className=' w-4/12'><label htmlFor="category" className=' '>Category</label></div>
                      <div><input type="text" name="" id="category" className='border'
                      value ={items.catagory}
                      onChange={(e)=>setData({...items,catagory:e.target.value})}
                      /></div>
                    </div>
                    <div className=' flex flex-row mt-1'>
                      <div className=' w-4/12'><label htmlFor="brand" className=' '>Brand</label></div>
                      <div><input type="text" name="" id="brand" className='border'
                      value ={items.brand}
                      onChange={(e)=>setData({...items, brand:e.target.value})}
                      /></div>
                    </div>
                    
                    
                    <div className='flex flex-row justify-center items-center pt-2'>
                    <input type="reset" value="reset" className="p-1  bg-blue-900   text-white  hover:bg-blue-500 cursor-pointer text-sm rounded-sm px-2"/>
                      <input type="button" value="Udpdate Product" className="p-1  bg-blue-900 ml-2 rounded-sm px-2 text-white  text-sm hover:bg-blue-500 cursor-pointer" 
                       onClick={()=>updateData(items.id)}/>
                       
                    </div>
                </div>
                </form>
        </div>
        
        </div>
      </div>
  )
}

export default ViewProducts