import React from 'react';

import ProductCard from 'coffee/components/features/Product/components/ProductCard';
import Menu from 'coffee/data/Menu';

const Product: React.FC = () => {
    return (
        <section className="bg-calm-brown border-b-2 border-white">
            <h1 className="text-6xl text-calm-black font-black text-center p-10">Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-16">
                    {Menu.map((item, index) => (
                        <ProductCard key={index} menu={item} />
                    ))}
                </div>
        </section>

    );
};

export default Product;
