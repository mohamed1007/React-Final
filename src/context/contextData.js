import { createContext, useState } from "react";

export const ContextData=createContext()




export default function ContextDataProvider(props){


    let [token,setToken]=useState(null)



    let contextData={token,setToken}

    return(
        <ContextData.Provider value={contextData}>
            {props.children}
        </ContextData.Provider>
    )
}