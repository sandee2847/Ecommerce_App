import React, { useState } from "react";
import image1 from './assets/image/image1.jpg'
import image2 from './assets/image/image2.webp'
import image3 from './assets/image/image3.png'

function EcommerceStore() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Iphone XR",
            price: 10,
            image: image1,
            description: "iPhone XR 256 GB: ",
        },
        {
            id: 2,
            name: "HP Laptop",
            price: 20,
            image: image2,
            description: "Laptop 8 GB RAM 512 SSD: ",
        },
        {
            id: 3,
            name: "Book",
            price: 30,
            image: image3,
            description: "G.K Book:",
        },
    ]);
    const [cartItems, setCartItems] = useState([]);

    function handleAddToCart(item) {
        setCartItems([...cartItems, item]);
    }

    function handleRemoveFromCart(itemId) {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    }

    const cartTotal = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <div style={{ height: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', color: '#fff' }}>
                <h1>E-commerce Store</h1>
                <h2>Items</h2>
            </div>
            <div >
                <ul>
                    {items.map((item) => (
                        <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', margin: 30 }} key={item.id}>
                            <h3>{item.name}</h3>
                            <img style={{ height: 100, width: 100 }} src={item.image} alt={item.name} />
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                            <button style={{ margin: 20 }} onClick={() => handleAddToCart(item)}>Add to Cart</button>
                        </li>
                    ))}
                </ul>
            </div>
            <br />
            <ul>
                <h2 style={{ textAlign: 'center', backgroundColor: 'lightgrey', fontSize: 32 }}>Cart</h2>
                {cartItems.map((item) => (
                    <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', margin: 30 }} key={item.id}>
                        <h3>{item.name}</h3>
                        <img style={{ height: 100, width: 100 }} src={item.image} alt={item.name} />
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                        <button style={{ margin: 20 }} onClick={() => handleRemoveFromCart(item.id)}>
                            Remove from Cart
                        </button>
                    </li>
                ))}
            </ul>
            <p style={{ textAlign: 'center', fontSize: 28 }}>Total: ${cartTotal}</p>
        </div>
    );
}

export default EcommerceStore;
