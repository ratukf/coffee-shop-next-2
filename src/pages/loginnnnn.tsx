import React from 'react';
import { useAtom } from 'jotai';
import { emailAtom, passwordAtom, currentUserAtom, loginErrorAtom } from 'coffee/trash/utils/loginAtoms'; // Pastikan path benar
import { userLogin, User } from 'coffee/data/userLogin';
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useAtom(emailAtom);
  const [password, setPassword] = useAtom(passwordAtom);
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const [loginError, setLoginError] = useAtom(loginErrorAtom);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Cari pengguna yang cocok
    const user: User | undefined = userLogin.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Set pengguna yang sedang login
      setCurrentUser(user);
      setLoginError('');
      // Simpan data user di localStorage
      localStorage.setItem('currentUser ', JSON.stringify(user));
      router.push('/');
      console.log("User: ", user)
      console.log("LocalStorage: ", localStorage)
    } else {
      // Set pesan error
      setLoginError('Email atau password salah.');
    }

  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        {loginError && (
          <div className="mb-4 text-red-500 text-sm">{loginError}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
