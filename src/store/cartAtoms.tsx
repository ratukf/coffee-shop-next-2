import { atom } from 'jotai';
import CartItem from 'coffee/types/productsType';

// Fungsi utilitas untuk memuat data dari localStorage
const loadCartFromLocalStorage = (): CartItem[] => {
    if (typeof window !== 'undefined') { // Untuk memastikan agar kode dijalankan di lingkungan browser
        try {
            const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
            return savedCart.map((item: CartItem) => ({
                ...item,
                quantity: Number.isFinite(item.quantity) ? item.quantity : 1,
            }));
        } catch (error) {
            console.error('Failed to load cart from localStorage:', error);
            return [];
        }
    }
    return [];
};

// Fungsi utilitas untuk menyimpan data ke localStorage
const saveCartToLocalStorage = (cart: CartItem[]) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};

// Inisiasi atom untuk keranjang belanja
const cartAtom = atom<CartItem[]>([]);

// OnMount untuk mengeksekusi kode setelah komponen "dipasang" ke DOM
cartAtom.onMount = (setAtom) => {
    const validatedCart = loadCartFromLocalStorage();
    setAtom(validatedCart);
};

// Fungsi untuk memperbarui keranjang
export const updateCart = atom(
    null,
    (get, set, newCart: CartItem[]) => {
        set(cartAtom, newCart);
        saveCartToLocalStorage(newCart);
    }
);

// Fungsi untuk menghapus item dari keranjang
export const removeItemFromCart = atom(
    null,
    (get, set, title: string) => {
        const updatedCart = get(cartAtom).filter(item => item.title !== title);
        set(cartAtom, updatedCart);
        saveCartToLocalStorage(updatedCart);
    }
);

// Fungsi untuk menambahkan item ke keranjang
export const addToCartAtom = atom(
    (get) => get(cartAtom),
    (get, set, cartItem: CartItem) => {
      const updatedCart = [...get(cartAtom), cartItem];
      set(cartAtom, updatedCart);
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
    }
  );

export { cartAtom };
