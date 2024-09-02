import { atom } from 'jotai';

export interface CartItem {
    url: string;
    title: string;
    description: string;
    price: number; 
    quantity: number;
}

const cartAtom = atom<CartItem[]>([]);

cartAtom.onMount = (setAtom) => {
    if (typeof window !== 'undefined') {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        // Ensure each item has a valid quantity
        const validatedCart = savedCart.map((item: CartItem) => ({
            ...item,
            quantity: typeof item.quantity === 'number' && !isNaN(item.quantity) ? item.quantity : 1,
        }));
        console.log('Loaded cart:', validatedCart);
        setAtom(validatedCart);
    }
};

export { cartAtom };

// Additional utility functions for updating and removing items

export const updateCart = (setAtom: React.Dispatch<React.SetStateAction<CartItem[]>>, newCart: CartItem[]) => {
    setAtom(newCart);
    if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(newCart));
    }
};

export const removeItemFromCart = (setAtom: React.Dispatch<React.SetStateAction<CartItem[]>>, title: string) => {
    setAtom((prevCart) => {
        const updatedCart = prevCart.filter(item => item.title !== title);
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
        return updatedCart;
    });
};
