import {useContext} from "react";
import cartContext from '../components/cartContext';

function ProductCard({id, name, price, picture}){
    const {setItems, items} = useContext(cartContext);
    const productAmount = items?.[id] ?? 0
    const handleAmount = (action) =>{
        if(action === 'inc'){
            const newItemAmount = id in items? items[id] + 1: 1;
            setItems({...items, [id]: newItemAmount})
        }
        else if(action === 'dec'){
            if(items?.[id]>0){
            setItems({...items, [id]: items[id] - 1})
        }
    }
    }
    return(
        <div className="bg-gray-200 p-6 rounded-md">
            <div className="relative 100% h-50 m-auto">
                <img src={picture} alt={name} className="object-cover"/>
            </div>
            <div className="flex justify-between mt-4">
                <div className="font-bold text-1">{name}</div>
                <div className="font-bold text-1 text-gray-500">${price} per kg</div>
            </div>
            <div className="flex justify-between mt-4 w-2/4 m-auto">
                <div onClick={()=>{handleAmount('dec')}} className="pl-2 pr-2 rounded-md text-white bg-red-400" disabled={productAmount === 0}>-</div>
                <div className="font-bold">{productAmount}</div>
                <div onClick={()=>{handleAmount('inc')}} className="pl-2 pr-2 rounded-md text-white bg-green-400">+</div>
            </div>
        </div>
    )
}

export default ProductCard;