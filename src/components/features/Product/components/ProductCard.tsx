import React from 'react';

import ProductImage from 'coffee/components/features/Product/components/ProductImage';
import ProductInfo from 'coffee/components/features/Product/components/ProductInfo';
import MenusTypes from 'coffee/data/MenuTypes';

interface MenuCardProps {
    menu: MenusTypes;
}

const ProductCard: React.FC<MenuCardProps> = ({ menu }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <ProductImage url={menu.url} title={menu.title} />
            <ProductInfo 
                title={menu.title} 
                description={menu.description} 
                price={menu.price} 
            />
        </div>
    );
};

export default ProductCard;
