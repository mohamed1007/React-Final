import React, { useContext, useEffect, useState } from 'react';
import './orderHistory.css';
import { ContextData } from '../../context/contextData';
import axios from 'axios';

const OrderHistory = () => {
    const { decodedToken } = useContext(ContextData);
    const [allOrders, setAllOrders] = useState([]);

    const getAllOrdersByEmail = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/getAllOrdersByCustomerId/${decodedToken?.email}`);
            setAllOrders(data.allOrders);
        } catch (error) {
            console.error('Error getting orders:', error);
        }
    }

    useEffect(() => {
        getAllOrdersByEmail();
    }, []);

    return (
        <div className="orderHistory mt-5">
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Medicine Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.map((order, index) => (
                        <tr key={index}>
                            <td>
                                {order.items.map((medicine, index) => (
                                    <div key={index}>{medicine.name}</div>
                                ))}
                            </td>
                            <td>
                                {order.items.map((medicine, index) => (
                                    <div key={index}>{medicine.quantity}</div>
                                ))}
                            </td>
                            <td>{order.total}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderHistory;
