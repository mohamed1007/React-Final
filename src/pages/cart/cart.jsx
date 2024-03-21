

import React, { useContext, useEffect, useState } from 'react'
import './cart.css'
import { ContextData } from '../../context/contextData'
import iconDelete from '../../assets/cart_cross_icon.png'
import axios from 'axios';
export default function Cart() {
    let [allMeicine,setAllMeicine]=useState([]);
    const{cartItems,removeFromCart,getTotalCartItems}=useContext(ContextData);
    async function getAllMedicene(){
        let {data}=await axios.get('http://localhost:3000/getAllMedicines');
        setAllMeicine(data.allMedicines);
    }
    useEffect(()=>{
        getAllMedicene();
    },[])
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
            
            {allMeicine.map((item)=>{
                if(cartItems[item.name] > 0 ){
                    return  <div>
                                <div className="CartItems-format CartIt-format-main">
                                    <img className='CartIcon-product-icon' src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <button className='CartItems-quantity'>{cartItems[item._id]}</button>
                                    {/* <p>${item.new_price*cartItems[item.id]}</p> */}
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
                            <p>${getTotalCartItems()}</p>
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
                            <h3>${getTotalCartItems()}</h3>
                            {/* <h3>$ getTotalCartAmount</h3> */}
                        </div>
                    </div>
                    <button>PROCEED TO Checkout</button>
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
