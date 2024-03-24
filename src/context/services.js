import axios from "axios"
import { createContext } from "react"

export const ServicesLogic=createContext()

export default function ServicesProvider(props) {
    const [services,setServices]=useState([])
    const [cartItems, setCartItems] = useState({});

    const getAllServices=async ()=>{
        try{
        let {data}=await axios.get('http://localhost:3000/getAllServices')
        setServices(data.allServices)
        setCartItems(data.allServices)
    }catch (error) {
            console.error('Error fetching services:', error);
        }
    }

    function createDefaultCart(medicines) {
        let cart = {};
        for (const service of services) {
            cart[service._id] = 0;
        }
        return cart;
    }

    useEffect(() => {
        getAllServices()
    },[])


    let servicesLogic={}
    return (
        <ServicesLogic.Provider value={servicesLogic}>
            {props.children}
        </ServicesLogic.Provider>
    )
}