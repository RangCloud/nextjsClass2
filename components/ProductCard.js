import {useState, useContext} from "react";
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
            setItems({items, [id]: items[id] - 1})
        }
    }
    return(
        <div className="">
            <div className="">
                <img src={picture} alt={name} className=""/>
            </div>
            <div className="">
                <div>{name}</div>
                <div>${price} per kg</div>
            </div>
            <div className="">
                <div onClick={()=>{handleAmount('dec')}} className="" disabled={productAmount === 0}>-</div>
                <div className="">{productAmount}</div>
                <div onClick={()=>{handleAmount('inc')}} className="">+</div>
            </div>
        </div>
    )
}