

import axios from 'axios'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'


export default function signup() {

    let navigate = useNavigate();


    const  register=async(userData)=>{
        let {data}=await axios.post('http://localhost:4000/signup',userData)
        console.log(data);
        if(data.message==='Customer added') navigate('/signin')
    }


    const registerSchema=Yup.object({
        name:Yup.string().required("Name is required").min(3,'Must be at least 3 characters').max(20,'Must be less than 20 characters'),
            email:Yup.string().email("Invalid email").required("Email is required"),
            password:Yup.string().required("Password is required").matches(/^[A-Z][a-z0-9]{3-8}$/,"Password must start with a capital letter and must be between 3 and 8 characters"),
            address:Yup.string().required("Address is required"),
            phone:Yup.number().required("Phone number is required").matches(/^01[0125][0-9]{8]$/, "Invalid phone number")
    })

    const registerForm=Formik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            address:'',
            phone:''
        },
        validationSchema:registerSchema,
        onSubmit:register
    })


    return (
        <form className="signup w-50 my-5" onSubmit={registerForm.handleSubmit} >
            <h1 className='text-center'>Sign Up</h1>
            <div className="form-group mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name="name"
                placeholder='Enter Your Name' onBlur={registerForm.handleBlur} value={registerForm.values.name} onChange={registerForm.handleChange}/>
                {registerForm.errors.name &&registerForm.tocked.name ? <p className='text-danger'>{registerForm.errors.name}</p>:null}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" name="email" 
                placeholder='Enter Your Email' onBlur={registerForm.handleBlur} value={registerForm.values.email} onChange={registerForm.handleChange}/>
                {registerForm.errors.email &&registerForm.tocked.email ? <p className='text-danger'>{registerForm.errors.email}</p>:null}

            </div>
            <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password"
                placeholder='Enter Your Password' onBlur={registerForm.handleBlur} value={registerForm.values.password} onChange={registerForm.handleChange}/>
                {registerForm.errors.password &&registerForm.tocked.password ? <p className='text-danger'>{registerForm.errors.password}</p>:null}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" name='address'
                placeholder='Enter Your Address' onBlur={registerForm.handleBlur} value={registerForm.values.address} onChange={registerForm.handleChange}/>
                {registerForm.errors.address &&registerForm.tocked.address ? <p className='text-danger'>{registerForm.errors.address}</p>:null}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" name='phone'
                placeholder='Enter Your Phone Number' onBlur={registerForm.handleBlur} value={registerForm.values.phone} onChange={registerForm.handleChange}/>
                {registerForm.errors.phone &&registerForm.tocked.phone ? <p className='text-danger'>{registerForm.errors.phone}</p>:null}
            </div>
            <button type="submit" className="btn btn-primary d-block m-auto">Submit</button>
        </form>
    )
}
