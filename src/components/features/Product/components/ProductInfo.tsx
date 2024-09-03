import React from 'react';

interface ProductInfoProps {
    title: string;
    description: string;
    price: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ title, description, price }) => {
    return (
        <div className="p-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="text-lg font-bold mt-2">Rp {price.toLocaleString()}</p>
        </div>
    );
};

export default ProductInfo;
