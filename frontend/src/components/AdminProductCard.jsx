import React, { useState } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../helpers/displayCurrency';

const AdminProductCard = ({
    data,
    fetchdata
}) => {
    const [editProduct,setEditProduct] = useState(false)

  return (
    <div className='bg-gray-100 dark:bg-gray-900 p-4 rounded '>
       <div className='w-[160px]'>
            <div className='w-[158px] h-[158px] flex items-center justify-center'>
              <img src={data?.productImage[0]}  className='mx-auto object-fill h-full'/>   
            </div> 
            <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>

            <div>

                <p className='font-semibold'>
                  {
                    displayINRCurrency(data.sellingPrice)
                  }
        
                </p>

                <div className='w-fit ml-auto p-2 bg-gray-300 text-gray-900 dark:text-gray-200 dark:bg-gray-700 hover:bg-green-600 dark:hover:bg-green-600 rounded-full hover:text-white cursor-pointer ' onClick={()=>setEditProduct(true)}>
                    <MdModeEditOutline/>
                </div>

            </div>

          
       </div>
        
        {
          editProduct && (
            <AdminEditProduct productData={data} onClose={()=>setEditProduct(false)} fetchdata={fetchdata}/>
          )
        }
    
    </div>
  )
}

export default AdminProductCard;