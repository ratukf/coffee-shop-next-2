import { atom } from 'jotai';
import UserData from 'coffee/pages/auth/const/UserData';
import UserDataType from 'coffee/pages/auth/type/UserDataType';

// Atom untuk menyimpan status user yang sudah login
export const loggedInUserAtom = atom<UserDataType | null>(null);

// Atom untuk menyimpan pesan error
export const authErrorAtom = atom<string>('');

// Atom untuk menyimpan email yang dimasukkan di form login
export const emailAtom = atom<string>('');

// Atom untuk menyimpan password yang dimasukkan di form login
export const passwordAtom = atom<string>('');

// Fungsi untuk melakukan proses login dengan mencari user berdasarkan email dan password
export const authenticateUser = (email: string, password: string): UserDataType | null => {
  const user = UserData.find(user => user.email === email && user.password === password);
  return user || null;
};

