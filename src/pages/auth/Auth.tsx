import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

import { authenticateUser, loggedInUserAtom, authErrorAtom } from 'coffee/store/AuthAtom';

const Auth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [, setLoggedInUser] = useAtom(loggedInUserAtom);
  const [error, setError] = useAtom(authErrorAtom);

  const router = useRouter();

  const handleLogin = () => {
    const user = authenticateUser(email, password);
    
    if (user) {
      // Jika user ditemukan, simpan data user ke dalam atom Jotai
      setLoggedInUser(user);
      setError('');
      alert(`Welcome ${user.name}!`);
      // Misalnya, redirect ke halaman lain atau lakukan tindakan setelah login
      router.push('/products')
      console.log("Logged in user: ", user.name);

    } else {
      // Jika user tidak ditemukan, update error state di atom Jotai
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-calm-brown border-b-2 border-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-calm-black mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-calm-black mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-calm-black rounded-lg"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-calm-black mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-calm-black rounded-lg"
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-calm-black text-white py-2 rounded-lg hover:bg-calm-brown transition-colors"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Auth;
