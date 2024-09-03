import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';

import { loggedInUserAtom } from 'coffee/store/AuthAtom';

const CartIcon: React.FC = () => {
    const [isLoggedIn] = useAtom(loggedInUserAtom)
    const router = useRouter();

    const cartHandle = () => {
        if (!isLoggedIn) {
            alert("Please login first")
            router.push('/login')
            return;
        }
        router.push('/cart')
    }

    return (
        <li>
            <FaCartShopping onClick={cartHandle} className='text-2xl mx-4 cursor-pointer text-calm-brown hover:scale-150 hover:text-calm-black duration-200' />
            {/* {cart.length > 0 && (
                    <span className="ml-2 text-sm bg-red-500 text-white rounded-full px-2 py-1">{cart.length}</span>
                )} */}
        </li>
    );
};

export default CartIcon;
