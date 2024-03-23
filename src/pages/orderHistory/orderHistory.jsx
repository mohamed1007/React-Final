import React, { useContext, useEffect, useState } from 'react'
import './orderHistory.css'
import { ContextData } from '../../context/contextData';
import axios from 'axios';
export default function OrderHistory() {
    const { decodedToken } = useContext(ContextData);

    const [allOrders, setAllOrders] = useState([]);

    const getAllOrdersByEmail =async()=>{ 
        let {data}=await axios.get(`http://localhost:3000/getAllOrdersByCustomerId/${decodedToken.email}`)
        console.log(data.allOrders);
        setAllOrders(data.allOrders);
    }

    useEffect(() => {
        getAllOrdersByEmail()
    },[])

    return (
        {allOrders}.allOrders.map((order, index) => (
            <div className='orderHistory' key={index}>
                <p className='orderId'>Order Id: {order._id}</p>
                <p className='orderDate'>Order Date: {order.customerEmail}</p>
                <p className='orderTotal'>Order Total: {order.total}</p>
            </div>
        ))
    )
}
