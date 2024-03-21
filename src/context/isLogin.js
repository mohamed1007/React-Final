import React from 'react'
import { Navigate } from 'react-router-dom'

export default function IsLogin(props) {
    // this function use to when user login can to add any product to cart and buy 
    if(localStorage.getItem('token')){
        // in this return user can to add any product to cart and buy
        return props.children
    }else{
        return (
            // in this return user can't to add any product to cart and buy must login
            alert("Please Login First"),
            <Navigate to={'/login'} />
        )
    }
}
