

import axios from 'axios'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'


export default function login() {

    let navigate = useNavigate();


    const  login=async(userData)=>{
        let {data}=await axios.post('http://localhost:4000/signin',userData)
        console.log(data);
        if(data.message==='Customer found'){ 
            navigate('/')
            localStorage.setItem('token',data.TOKEN)
        }
    }


    const loginSchema=Yup.object({
            email:Yup.string().email("Invalid email").required("Email is required"),
            password:Yup.string().required("Password is required").matches(/^[A-Z][a-z0-9]{3-8}$/,"Password must start with a capital letter and must be between 3 and 8 characters"),
    })

    const loginForm=Formik({
        initialValues:{
            email:'',
            password:'',
        },
        validationSchema:loginSchema,
        onSubmit:login
    })


    return (
        <form className="signup w-50 my-5" onSubmit={loginForm.handleSubmit} >
            <h1 className='text-center'>Login</h1>
            <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" name="email" 
                placeholder='Enter Your Email' onBlur={loginForm.handleBlur} value={loginForm.values.email} onChange={loginForm.handleChange}/>
                {loginForm.errors.email &&loginForm.tocked.email ? <p className='text-danger'>{loginForm.errors.email}</p>:null}

            </div>
            <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password"
                placeholder='Enter Your Password' onBlur={loginForm.handleBlur} value={loginForm.values.password} onChange={loginForm.handleChange}/>
                {loginForm.errors.password &&loginForm.tocked.password ? <p className='text-danger'>{loginForm.errors.password}</p>:null}
            </div>
            <button type="submit" className="btn btn-primary d-block m-auto">Login</button>
        </form>
    )
}
