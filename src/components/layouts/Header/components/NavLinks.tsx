import Link from 'next/link';
import React from 'react';

interface LinkProps {
    id: number;
    link: string;
    name: string;
}

const NavLinks: React.FC<{ links: LinkProps[] }> = ({ links }) => {
    return (
        <>
            {links.map(({ id, link, name }) => (
                <li
                    key={id}
                    className="font-Kanit text-xl nav-link-item px-4 cursor-pointer capitalize font-bold text-calm-brown hover:scale-105 hover:text-calm-black duration-200 link-underline"
                >
                    <Link href={link}>{name}</Link>
                </li>
            ))}
        </>
    );
};

export default NavLinks;
