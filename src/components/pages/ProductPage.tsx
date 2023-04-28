/*Исходный  материал - {https://www.youtube.com/@VladilenMinin}*/
import React, {useContext} from 'react'
import { ModalContext } from '../../context/modalText'
import { useProduct } from '../../hooks/products'
import { Iproduct } from '../../models'
import CreateProduct from '../CreateProduct'
import Error from '../Erorr'
import Loader from '../loader'
import Modal from '../Modal'
import Product from '../Product'

const AboutPage = ()=>{
        
    const {loading, error, products, addProduct} = useProduct()
    const {modal, open, close} = useContext(ModalContext)
     const createHandler =(product:Iproduct)=>{
        close();
        addProduct(product)
     }
        
        return(
            
                        
               <div className='container mx-auto max-w-2xl pt-5'>
                   {loading && <Loader/>}
                   {error && <Error error={error}/>}
                   {products.map(product=> <Product product={product} key={product.id}/>)}
                   {/* <Product product={products[0]}/>
                   <Product product={products[1]}/> */}
                   
           
           
                    {modal && <Modal title='Create new Product' onClose={close}>
                       <CreateProduct onCreate={createHandler}/>
                   </Modal>}
                   <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-6' onClick={open}>+</button>
               </div>
        )
                
    }
    
    export default AboutPage