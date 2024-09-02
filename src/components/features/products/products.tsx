import React from 'react';
import { useState } from 'react';
import Data from 'coffee/data/menu';
import Image from 'next/image';

import { useAtom } from 'jotai';
import { cartAtom } from 'coffee/utils/cartAtoms';

export default function Products() {
    const [cart, setCart] = useAtom(cartAtom);
    const [isAnimating, setIsAnimating] = useState<number | null>(null);


    const addToCart = (product: Product, index: number) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            if (typeof window !== 'undefined') {
                localStorage.setItem('cart', JSON.stringify(updatedCart));
            }
            console.log('prevCart: ', prevCart);
            setIsAnimating(index);
            setTimeout(() => setIsAnimating(null), 1000);
            return updatedCart;
        });
    };


    return (
        <section className="p-8 bg-calm-brown border-b-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center p-4 sm:p-6 md:p-10">
                Explore Our Menu
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                {Data.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
                    >
                        <div className="relative w-full h-48">
                            <Image
                                src={`/images/${item.url}`}
                                layout="fill"
                                objectFit="contain"  
                                alt={item.title || ''}
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">
                                {item.title}
                            </h2>
                            <p className="text-gray-700 mb-2 text-sm sm:text-base">
                                {item.description}
                            </p>
                            <h3 className="text-lg font-bold mb-4">
                                Rp. {item.price.toLocaleString('id-ID')}
                            </h3>
                            <button
                                onClick={() => addToCart(item, index)}
                                className={`mt-4 bg-calm-brown text-white px-4 py-2 rounded hover:bg-calm-black relative overflow-hidden ${isAnimating === index ? 'animate-animate-cart' : ''}`}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>


    )
}
