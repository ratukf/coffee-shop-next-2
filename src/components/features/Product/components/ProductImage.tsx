import React from 'react';
import Image from 'next/image';
// import MenuTypes from 'coffee/data/MenuTypes';

interface ProductImageProps {
    url: string;
    title: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ url, title }) => {
    return (
        <div className="relative w-full h-48">
            <Image
                src={`/images/${url}`}
                fill
                alt={title || ''}
                className="rounded-t-lg"
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority
            />
        </div>
    );
};

export default ProductImage;
