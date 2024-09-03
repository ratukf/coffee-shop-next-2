import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import NavLinks from 'coffee/components/layouts/Header/components/NavLinks';
import MobileNav from 'coffee/components/layouts/Header/components/MobileNav';
import UserSection from 'coffee/components/layouts/Header/components/UserSection';
import CartIcon from 'coffee/components/layouts/Header/components/CartIcon';
import image from 'coffee/images/nav-coffee-monster.png';
import Links from 'coffee/components/layouts/Header/const/Links';

const Navbar: React.FC = () => {
    const [nav, setNav] = useState(false);
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
                            priority
                        />
                    </Link>
                </h1>
            </div>

            <ul className="hidden md:flex">
                <NavLinks links={Links} />
                <CartIcon />
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            <MobileNav links={Links} nav={nav} setNav={setNav} />

            <div>
                <UserSection />
            </div>
        </div>
    );
};

export default Navbar;
