import axios from "axios";
import {jwtDecode} from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const ContextData = createContext();

export default function ContextDataProvider(props) {
    const [allMedicine, setAllMedicine] = useState([]);
    const [token, setToken] = useState(null);

    const getDefaultCart = () => {
        let cart = {};
        for (let i = 0; i < allMedicine.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    }

    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        getAllMedicenes();
    }, []);

    async function getAllMedicenes() {
        try {
            const { data } = await axios.get('http://localhost:3000/getAllMedicines');
            setAllMedicine(data.allMedicines);
        } catch (error) {
            console.error('Error fetching medicines:', error);
        }
    }

    function addToCart(itemId) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    function removeFromCart(itemId) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    function getTotalPrice() {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allMedicine.find((product) => product._id === Number(item));
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    function getTotalCartItems() {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const decodedToken = token ? jwtDecode(token) : null;

    let contextData = {
        token,
        setToken,
        allMedicine,
        cartItems,
        decodedToken,
        addToCart,
        removeFromCart,
        getTotalCartItems,
        getTotalPrice
    };

    return (
        <ContextData.Provider value={contextData}>
            {props.children}
        </ContextData.Provider>
    );
}
