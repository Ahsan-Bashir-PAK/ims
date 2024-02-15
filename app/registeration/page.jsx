import React from 'react'

const RegisterationForm = () => {
  return (
    <div>
          <div className=' border w-screen m-auto p-3 justify-center items-center text-center h-screen bg-gradient-to-b from-blue-200   to-slate-200'>
              
              <form action="" method="post">
                <div className=' justify-start border border-blue-300 p-4 w-5/12 rounded-md items-start m-auto bg-gradient-to-b from-blue-300   to-slate-100 shadow-md shadow-blue-800 '>
                <h1 className='font-bold text-blue-900 bg-slate-100 p-2 rounded-md'> Product Registeration </h1>
                    <div className=' flex flex-row mt-2'>
                      <div className=' w-4/12'><label htmlFor="serial" className='  '>Serial Number</label></div>
                      <div><input type="text" name="" id="serial" className='border'/></div>
                    </div>
                    <div className=' flex flex-row mt-1'>
                      <div className=' w-4/12'><label htmlFor="product_name" className=' '>Product Name</label></div>
                      <div><input type="text" name="" id="product_name" className='border'/></div>
                    </div>
                    <div className=' flex flex-row mt-1'>
                      <div className=' w-4/12'><label htmlFor="category" className=' '>Category</label></div>
                      <div><input type="text" name="" id="category" className='border'/></div>
                    </div>
                    <div className=' flex flex-row mt-1'>
                      <div className=' w-4/12'><label htmlFor="brand" className=' '>Brand</label></div>
                      <div><input type="text" name="" id="brand" className='border'/></div>
                    </div>
                    
                    
                    <div className='flex flex-row justify-center items-center pt-2'>
                    <input type="reset" value="reset" className="p-1  bg-blue-800  rounded-md text-white  hover:bg-blue-500 cursor-pointer"/>
                      <input type="button" value="Add Product" className="p-1  bg-blue-800 ml-2 rounded-md text-white  hover:bg-blue-500 cursor-pointer" />
                      
                    </div>
                </div>
                </form>
          </div>
    </div>
  )
}

export default RegisterationForm