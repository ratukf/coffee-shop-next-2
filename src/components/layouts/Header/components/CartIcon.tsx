import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import Link from 'next/link';

const CartIcon: React.FC = () => {
    return (
        <li>
            <Link href="/cart">
                <FaCartShopping className='text-2xl mx-4 cursor-pointer text-calm-brown hover:scale-150 hover:text-calm-black duration-200'/>
                {/* {cart.length > 0 && (
                    <span className="ml-2 text-sm bg-red-500 text-white rounded-full px-2 py-1">{cart.length}</span>
                )} */}
            </Link>
        </li>
    );
};

export default CartIcon;
