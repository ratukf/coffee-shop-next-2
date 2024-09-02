import { atom } from 'jotai';
import { User } from 'coffee/data/userLogin';

// Atom untuk menyimpan input email
export const emailAtom = atom<string>('');

// Atom untuk menyimpan input password
export const passwordAtom = atom<string>('');

// Atom untuk menyimpan pengguna yang sedang login
export const currentUserAtom = atom<User | null>(null);

// Atom untuk menyimpan pesan error login
export const loginErrorAtom = atom<string>('');
