

import React, { useContext, useState } from 'react'
import './cart.css'
import { ContextData } from '../../context/contextData'
import iconDelete from '../../assets/cart_cross_icon.png'
export default function Cart() {
    
    const{decodedToken,allMedicine,cartItems,removeFromCart,getTotalPrice}=useContext(ContextData);

    const [order,setOrder]=useState({})
    console.log(order);
    const handleProceedToCheckout = () => {
        const items = allMedicine
            .filter(item => cartItems[item._id] > 0)
            .map(item => item.name);

        setOrder({
            email:decodedToken.email,
            items:[...items],
        });
        
    };
    
    return (
        <div className='CartItems'>
            <div className="CartIt-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            
            {allMedicine.map((item)=>{
                if(cartItems[item._id] > 0 ){
                    return  <div>
                                <div className="CartItems-format CartIt-format-main">
                                    <img className='CartIcon-product-icon' src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <button className='CartItems-quantity'>{cartItems[item._id]}</button>
                                    <p>${item.price*cartItems[item._id]}</p>
                                    <img className='CartItems-delete' src={iconDelete} onClick={()=>removeFromCart(item._id)} alt="" />
                                </div>
                                <hr />
                            </div>
                }
                else{
                    return null
                }
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-price">
                            <p>Subtotal</p>
                            <p>${getTotalPrice()}</p>
                            {/* <p>$ getTotalCartAmount</p> */}

                        </div>
                        <hr />
                        <div className="cartitems-total-price">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-price">
                            <h3>Total</h3>
                            <h3>${getTotalPrice()}</h3>
                            {/* <h3>$ getTotalCartAmount</h3> */}
                        </div>
                    </div>
                    <button onClick={handleProceedToCheckout}>PROCEED TO Checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Have a promo code?</p>
                    <div className="cartitems-promoBox">
                        <input type="text" placeholder='Enter promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
