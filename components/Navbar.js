import {useContext} from "react";
import Link from 'next/link';
import cartContext from '../components/cartContext';

function Navbar(){
    const {items} = useContext(cartContext);
    const totalItemsAmount = Object.values(items).reduce( (x,y)=> x + y, 0);
    return(
        <div className="">
            <div className="">
                <div className="">
                    <Link href="/">My e-commerce</Link>
                </div>
                <div className="/cart" passHref>
                    <Link>
                        {totalItemsAmount} items in cart
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;