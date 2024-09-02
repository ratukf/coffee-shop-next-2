// cartAtoms.tsx
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


cartAtom.update = (getAtom, setAtom) => {
    return (newCart: CartItem[]) => {
        setAtom(newCart);
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
    };
};

cartAtom.removeItem = (getAtom, setAtom) => {
    return (title: string) => {
        const currentCart = getAtom(cartAtom);
        const updatedCart = currentCart.filter(item => item.title !== title);
        setAtom(updatedCart);
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    };
};

export { cartAtom };
