import React from 'react'
import { useState } from "react";

const Products = () => {
     const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Short Kurti", price: 999 },
    { id: 2, name: "Long Kurti", price: 1499 },
    { id: 3, name: "Co-ord Set", price: 1999 }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert("Added to cart");
  };

  return (
     <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((item) => (
        <div key={item.id} className="border rounded-lg p-4 shadow hover:shadow-lg">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-pink-500">₹{item.price}</p>
          <button
            onClick={() => addToCart(item)}
            className="mt-3 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>

  )
}

export default Products
