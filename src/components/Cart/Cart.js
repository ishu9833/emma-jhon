import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total = 0
    let shipping = 0
    let quantity = 0
    for(const products of cart){
        quantity = quantity + products.quantity
        total = total + products.price * products.quantity
        shipping = shipping + products.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = total + shipping + tax
    return (
        <div className='cart'>
            <h3>This is for carts</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total shipping cost: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;