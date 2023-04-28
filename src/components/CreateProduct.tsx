/*Исходный  материал - {https://www.youtube.com/@VladilenMinin}*/
import axios from "axios";
import React, {useState} from "react";
import { Iproduct } from "../models";
import Error from "./Erorr";


const productData : Iproduct =  {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CrateProducProps{
    onCreate: (product: Iproduct)=>void
}

const CreateProduct = ({onCreate}:CrateProducProps)=>{

const [value, setValue] = useState('')
const [error, setError] = useState('')

const submitHandler = async (event: React.FormEvent)=>{
    event.preventDefault()
    setError('')
    if (value.trim().length===0){
        setError('Plsease enter  valid title')
        return 
    }

    productData.title = value;
    const response  = await axios.post<Iproduct>('https://fakestoreapi.com/products', productData)
    onCreate(response.data)
}

    const  onChangeHandler = (event: React.KeyboardEvent<HTMLInputElement> | any)=> {   
       setValue(event.target.value);
    }
    
    return(
        <form onSubmit={submitHandler}>
            <input 
            type='text'
            className="border py-2 px-4 mb-2 w-full outline-0"
            placeholder="Enter prduct title..."
            value ={value}
            onChange={onChangeHandler}
            />
        
        {error && <Error error={error}/>}    
        <button type='submit' className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>

    )
}

export default CreateProduct

