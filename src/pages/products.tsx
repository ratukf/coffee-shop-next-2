import React from 'react';
import Data from 'coffee/data/menu';
import Image from 'next/image';

export default function Products() {
    return (
        <section className="p-8 bg-calm-brown">
            <h1 className="text-3xl font-bold mb-6 text-center">Explore Our Menu</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Data.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative h-48 w-full">
                            <Image
                                src={`/images/${item.url}`}
                                layout="fill"
                                objectFit="cover"
                                alt={item.title || ''}
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                            <p className="text-gray-700 mb-2">{item.description}</p>
                            <h3 className="text-lg font-bold">{item.price}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
