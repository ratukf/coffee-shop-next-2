import { atom } from 'jotai';
import CartItem from 'coffee/types/productsType';

// Inisiasi atom dengan array kosong
const cartAtom = atom<CartItem[]>([]);

cartAtom.onMount = (setAtom) => {
    if (typeof window !== 'undefined') {
        try {
            const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
            
            if (Array.isArray(savedCart)) {
                // Validasi data
                const validatedCart = savedCart.map((item: CartItem) => ({
                    ...item,
                    quantity: typeof item.quantity === 'number' && !isNaN(item.quantity) ? item.quantity : 1,
                }));
                
                setAtom(validatedCart);
            }
        } catch (error) {
            console.error('Failed to load cart from localStorage:', error);
        }
    }
};

// Fungsi untuk mengupdate cart dengan validasi tambahan
export const updateCart = (setAtom: React.Dispatch<React.SetStateAction<CartItem[]>>, newCart: CartItem[]) => {
    setAtom(newCart);
    if (typeof window !== 'undefined') {
        try {
            localStorage.setItem('cart', JSON.stringify(newCart));
        } catch (error) {
            console.error('Failed to save cart to localStorage:', error);
        }
    }
};

// Fungsi untuk menghapus item dari cart
export const removeItemFromCart = (setAtom: React.Dispatch<React.SetStateAction<CartItem[]>>, title: string) => {
    setAtom((prevCart) => {
        const updatedCart = prevCart.filter(item => item.title !== title);
        if (typeof window !== 'undefined') {
            try {
                localStorage.setItem('cart', JSON.stringify(updatedCart));
            } catch (error) {
                console.error('Failed to update cart in localStorage:', error);
            }
        }
        return updatedCart;
    });
};

export { cartAtom };
