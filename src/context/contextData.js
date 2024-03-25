import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const ContextData = createContext();

export default function ContextDataProvider(props) {
    const [allMedicine, setAllMedicine] = useState([]);
    // console.log(allMedicine);
    const [services,setServices]=useState([])
    const [token, setToken] = useState(null);
    const [cartItems, setCartItems] = useState({});
    console.log(cartItems);
    const [email, setEmail] = useState("");
    // console.log(cartItems);

    const getEmail = () => {
        try {
            const codeEmail = localStorage.getItem('token');
            const email = codeEmail ? jwtDecode(codeEmail) : null;
            setEmail(email.email);
            return email;
        } catch (error) {
            console.error('Error getting email:', error);
        }
    }
    useEffect(() => {
        getAllMedicenes();
        getEmail();
        getAllServices();
    }, []);

    async function getAllMedicenes() {
        try {
            const { data } = await axios.get('http://localhost:3000/getAllMedicines');
            setAllMedicine(data.allMedicines);
            setCartItems(createDefaultCart(data.allMedicines));
        } catch (error) {
            console.error('Error fetching medicines:', error);
        }
    }
    const getAllServices=async ()=>{
        try{
        let {data}=await axios.get('http://localhost:3000/getAllServices')
        // console.log(data.allServices);
        setServices(data.allServices)
        setCartItems((prev) => {
            let updatedCart = { ...prev };
            for (const service of data.allServices) {
                if (!updatedCart[service._id]) {
                    updatedCart[service._id] = 0;
                }
            }
            return updatedCart;
        });
    }catch (error) {
            console.error('Error fetching services:', error);
        }
    }


    // function createDefaultCart(medicines) {
    //     let cart = {};
    //     for (const medicine of medicines) {
    //         cart[medicine._id] = 0;
    //     }
    //     return cart;
    // }
    function createDefaultCart(items) {
        let cart = {};
        for (const item of items) {
            cart[item._id] = 0;
        }
        return cart;
    }

    // function addToCart(itemId) {
    //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //     window.scrollTo(0, 0);
    // }
    function addToCart(itemId, itemType) {
        const itemStock = allMedicine.find(item => item._id === itemId)?.stock;
        if (itemType === 'medicine') {
            if (itemStock === 0) {
                alert('Out of stock');
                return;
            } else if (itemStock === 1) {
                alert('Last item in stock');
            } else if (itemStock === 2) {
                alert('Only 2 items left in stock');
            }
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        } else if (itemType === 'service') {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        } else {
            console.error('Invalid item type:', itemType);
        }
        window.scrollTo(0, 0);
    }
    // function addToCart(itemId, itemType) {
    //     if (itemType === 'medicine' || itemType === 'service') {
    //         const itemStock = itemType === 'medicine' ? allMedicine.find(item => item._id === itemId)?.stock : 1;
    //         if (itemStock === 0) {
    //             alert('Out of stock');
    //             return;
    //         } else if (itemStock === 1) {
    //             alert('Last item in stock');
    //         } else if (itemStock === 2) {
    //             alert('Only 2 items left in stock');
    //         }
    //         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //         window.scrollTo(0, 0);
    //     } else {
    //         console.error('Invalid item type:', itemType);
    //     }
    // }

    // function addToCart(itemId, itemType) {
    //     if (itemType === 'medicine' || itemType === 'service') {
    //         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //         window.scrollTo(0, 0);
    //     } else {
    //         console.error('Invalid item type:', itemType);
    //     }
    // }   
    function removeFromCart(itemId) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    // function getTotalPrice() {
    //     let totalAmount = 0;
    //     for (const item in cartItems) {
    //         if (cartItems[item] > 0) {
    //             let itemInfo = allMedicine.find((product) => product._id === item);
    //             totalAmount += itemInfo.price * cartItems[item];
    //         }
    //     }
    //     return totalAmount;
    // }
    function getTotalPrice() {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allMedicine.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
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
        services,
        cartItems,
        decodedToken,
        addToCart,
        removeFromCart,
        getTotalCartItems,
        getTotalPrice,
        getEmail,
        email
    };

    return (
        <ContextData.Provider value={contextData}>
            {props.children}
        </ContextData.Provider>
    );
}