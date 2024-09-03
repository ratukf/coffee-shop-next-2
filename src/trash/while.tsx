import React from 'react';
import Link from 'next/link';
import { useAtom } from 'jotai';
import { loggedInUserAtom } from 'coffee/store/AuthAtom';

const UserSection: React.FC = () => {
    const [loggedInUser] = useAtom(loggedInUserAtom);
    console.log("loggedInUser: ", loggedInUser);

    return (
        <div>
            {loggedInUser ? <ul>
                <li
                    className="userName text-calm-black font-extrabold text-4xl"
                >
                    Hello,
                </li>
                <li>
                    <button
                        className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                </li>
            </ul> : <ul>
                <li className="loginButton">
                    <Link href="/login">
                        <span className="text-[#b2935b] hover:text-[#242424]">Login</span>
                    </Link>
                </li>
            </ul>}
        </div>
    );
};

export default UserSection;
