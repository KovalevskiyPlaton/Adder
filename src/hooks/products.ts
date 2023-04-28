import { useEffect, useState } from "react"
import { Iproduct } from "../models"
import axios, {AxiosError} from "axios"
import { preProcessFile } from "typescript"

export function useProduct(){
    const [count, setCount] = useState(0)
  const [products, setProduct] = useState<Iproduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setErorr] = useState('')

const addProduct = (product: Iproduct)=>{
      setProduct(prev=>[...prev, product])
}  
  async function fetchProducts(){
    try{
      setErorr('')
      setLoading(true)
      const response = await axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=5')
      setProduct(response.data)
      setLoading(false)
    }catch(e: unknown){
      const erorr = e as AxiosError
      setLoading(false)
      setErorr(erorr.message)
    }
   
  }

useEffect(()=>{
  fetchProducts()
},[])
return {products, error, loading, addProduct}
}