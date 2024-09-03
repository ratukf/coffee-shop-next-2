import React from 'react';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { loggedInUserAtom } from 'coffee/store/AuthAtom';

const UserSection: React.FC = () => {
    const [loggedInUser, setLoggedInUser] = useAtom(loggedInUserAtom);

    const handleLogOut = () => {
        setLoggedInUser(null);
        localStorage.removeItem('loggedInUser');
        alert('Logged out successfully')
    }

    return (
        <div>
            <ul>
                <>
                    <div>

                    </div>
                    <div>

                    </div>
                </>
            </ul>
            {loggedInUser ? <ul>                         <li
                className="userName text-calm-black font-extrabold text-4xl"
            >
                Hello, {loggedInUser.name}
            </li>
                <li>
                    <button
                        className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                        onClick={handleLogOut}
                    >
                        Logout
                    </button>
                </li> </ul> : <ul>                        <li className="loginButton">
                    <Link href="/login">
                        <span className="text-[#b2935b] hover:text-[#242424]">Login</span>
                    </Link>
                </li></ul>}
        </div>
    );
};

export default UserSection;
