import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import { FaCartShopping } from "react-icons/fa6";
import Image from 'next/image'
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

import { currentUserAtom } from 'coffee/utils/loginAtoms';
import { cartAtom } from 'coffee/utils/cartAtoms';
import image from 'coffee/images/nav-coffee-monster.png';

const Navbar: React.FC = () => {
    const [nav, setNav] = useState(false)
    const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
    const router = useRouter();
    const [cart] = useAtom(cartAtom);

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
          setCurrentUser(JSON.parse(storedUser)); // Set state currentUser dengan data dari localStorage
        }
      }, [setCurrentUser]);

    const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
        router.push('/');
    }

    const links = [
        {
            id: 1,
            link: '/',
            name: 'Home',
        },
        {
            id: 2,
            link: '/about',
            name: 'About Us',
        },
        {
            id: 3,
            link: '/products',
            name: 'Products',
        },
    ]

    return (
        <div className="p-14 navbar-wrapper flex justify-between items-center w-full h-20 text-[#242424] bg-white nav z-50">
            <div>
                <h1>
                    <Link
                        className="link-underline link-underline-black"
                        href="/"
                        rel="noreferrer"
                    >
                        <Image
                            src={image}
                            alt="Coffee Monster Logo"
                            width={300}
                            quality={50}
                        />
                    </Link>
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link, name }) => (
                    <li
                        key={id}
                        className="font-Kanit text-xl nav-link-item px-4 cursor-pointer capitalize font-bold text-calm-brown hover:scale-105 hover:text-calm-black duration-200 link-underline"
                    >
                        <Link href={link}>{name}</Link>
                    </li>
                ))}
                <li>
                    <Link href="/cart">
                        <FaCartShopping className='text-2xl mx-4 cursor-pointer text-calm-brown hover:scale-150 hover:text-calm-black duration-200'/>
                        {cart.length > 0 && (
                                <span className="ml-2 text-sm bg-red-500 text-white rounded-full px-2 py-1">{cart.length}</span>
                            )}
                    </Link>
                </li>
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            <div>
                <ul>
                    {currentUser ? (
                        <>
                            <li className="text-calm-black font-extrabold text-4xl">Hello, {currentUser.name}</li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link href="/login">
                                <span className="text-[#b2935b] hover:text-[#242424]">Login</span>
                            </Link>
                        </li>
                )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;