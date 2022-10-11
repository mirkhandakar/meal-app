import React, { useState } from 'react';
import './Cart.css';


const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let total = 0;
    let name = ' ';

    const [sampleNumber, setSampleNumber] = useState(null);

    const getRandomNumber = () => {
        let min = 1;
        let max = 13;
        setSampleNumber(Math.round(Math.random() * (max - min) + min))
    };

    for (const product of cart) {
        total = total + product.price;
        name = name + product.name + ' ';
    }



    return (
        <div className='cart'>
            <h4 >Total Order: {cart.length}</h4>
            <p className='product-name'>{"\n"}{name}{"\n"}</p>
            <button onClick={() => getRandomNumber(cart)}>Choose One for Me</button>
            <br />
            <button>Choose Again</button>
            <p>Selected Product ID: {sampleNumber}</p>
        </div>
    );
};

export default Cart;