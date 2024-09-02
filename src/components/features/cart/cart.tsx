import React from 'react';
import { useAtom } from 'jotai';
import { cartAtom, CartItem } from 'coffee/utils/cartAtoms';
import Image from 'next/image';

const Cart: React.FC = () => {
    const [cart, setCart] = useAtom(cartAtom);

    console.log('cart data: ', cart);

    const handleRemove = (title: string) => {
        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => item.title !== title);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const handleQuantityChange = (title: string, change: number) => {
        setCart(prevCart => {
            console.log('Previous Cart:', prevCart);
            const updatedCart = prevCart.map(item => {
                if (item.title === title) {
                    // Ensure quantity is a valid number    
                    const currentQuantity = typeof item.quantity === 'number' && !isNaN(item.quantity) ? item.quantity : 0;
                    console.log('Item before change:', item);
                    const newQuantity = currentQuantity + change;
                    console.log('New Quantity:', newQuantity);
                    if (newQuantity <= 0) {
                        return null; // Remove item when quantity is 0
                    }
                    return { ...item, quantity: newQuantity };
                }
                return item;
            }).filter(item => item !== null) as CartItem[];
            console.log('Updated Cart:', updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };
    

    // Group items by title and aggregate quantities
    const groupedCartItems = cart.reduce((acc: Record<string, CartItem>, item) => {
        console.log('Processing item:', item.title, 'Quantity:', item.quantity);
        if (!item.quantity) {
            console.warn('Item without quantity:', item);
        }
        const itemQuantity = item.quantity ?? 1;
        if (!acc[item.title]) {
            acc[item.title] = { ...item, quantity: 0 };
        }
        acc[item.title].quantity += itemQuantity;
        return acc;
    }, {});

    return (
        <section className="p-8 bg-calm-brown border-b-5">
            <h1 className="text-6xl font-bold mb-6 text-center p-10">
                Your Cart
            </h1>
            {Object.keys(groupedCartItems).length === 0 ? (
                <p className="text-center text-lg">Your cart is empty.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                        <thead className="bg-gray-100 border-b border-gray-200">
                            <tr>
                                <th className="p-4 text-left">Image</th>
                                <th className="p-4 text-left">Title</th>
                                <th className="p-4 text-left">Price</th>
                                <th className="p-4 text-left">Quantity</th>
                                <th className="p-4 text-left">Total</th>
                                <th className="p-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(groupedCartItems).map((item, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="p-4">
                                        <div className="relative h-24 w-24">
                                            <Image
                                                src={`/images/${item.url}`}
                                                layout="fill"
                                                objectFit="cover"
                                                alt={item.title || ''}
                                                className="rounded"
                                            />
                                        </div>
                                    </td>
                                    <td className="p-4">{item.title}</td>
                                    <td className="p-4">Rp. {item.price.toLocaleString('id-ID')}</td>
                                    <td className="p-4 flex items-center">
                                        <button
                                            onClick={() => handleQuantityChange(item.title, -1)}
                                            className="px-2 py-1 bg-gray-300 rounded"
                                        >
                                            -
                                        </button>
                                        <span className="px-4">{item.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(item.title, 1)}
                                            className="px-2 py-1 bg-gray-300 rounded"
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td className="p-4">{`Rp. ${(item.price * item.quantity).toLocaleString('id-ID')}`}</td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => handleRemove(item.title)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
};

export default Cart;
