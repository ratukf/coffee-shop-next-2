import Link from 'next/link';
import React from 'react';

const MobileNav: React.FC<{ links: { id: number; link: string; name: string }[]; nav: boolean; setNav: React.Dispatch<React.SetStateAction<boolean>> }> = ({ links, nav, setNav }) => {
    return (
        nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-calm-brown text-white">
                {links.map(({ id, link, name }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize py-6 text-4xl"
                    >
                        <Link onClick={() => setNav(!nav)} href={link}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        )
    );
};

export default MobileNav;
