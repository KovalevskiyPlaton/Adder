/*Исходный  материал - {https://www.youtube.com/@VladilenMinin}*/
import React, { useState } from 'react'
import { Iproduct } from '../models'

interface ProductProps {
    product: Iproduct
}
const  Product = ({product}:ProductProps) => {
    const [detiles, setDetails]=useState(false)
    const btnBgClassName = detiles? 'bg-yellow-400': 'bg-blue-400';
    const btnClasses = ['py-2 px-4 border', btnBgClassName];

    return (
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
        <img src={product.image} className='w-1/6' alt={product.title}/>
        <p>{product.title}</p>
        <span className='font-bold'>{product.price}</span>
        <button
        className={btnClasses.join(' ')} 
        onClick={()=> setDetails(prev=>!prev)}
        >
            {!detiles ? 'Show Detailes': 'Hide Detailes'}
            </button>
        {detiles && <div>
            <p>{product.description}</p>
            <p>Rate:<span style={{fontWeight:'bold'}}>{product?.rating?.rate}</span></p>
        
        </div>}
        </div>
    )
}



export default Product
