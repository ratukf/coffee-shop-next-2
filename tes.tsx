import React from 'react';

const ItemList = ({items}) => (
    <ul>
        {items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);

function Test() {
    const fruits = ['Apple', 'Banana', 'Orange', 'Kiwi'];
    
    return (
        <>
            <h1>Fruit list</h1>
            <ItemList items={fruits} />
        </>
    )

}

export default Test;