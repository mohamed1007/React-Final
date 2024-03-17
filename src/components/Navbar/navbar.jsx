import React from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import cartItem from '../../assets/cart_icon.png'
import './navbar.css'; 
const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container-fluid">
            <div className="col-4">
              <Link to={'/'}><img 
                src={logo} 
                alt="Logo" 
                className="navbar-logo"  
              /></Link>
            </div>
            
  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link to={'/'} className='nav-link active'>Home</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" href="#">Link</a> */}
                <Link to={'/about'} className='nav-link active'>About</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" href="#">Link</a> */}
                <Link to={'/contact'} className='nav-link active'>Contact</Link>
              </li>
              <li className="nav-item">
                <Link to={'medicines'} className="nav-link active" >Medicens</Link>
              </li>
              <li className="nav-item">
                <Link to={'/caterories'} className="nav-link active" >Categories</Link>
              </li>
            </ul>

            <div className='nav-login'>
                <Link to={"/login"}><button className='btn btn-outline-dark'>Login</button></Link>
                <Link to={'/cart'}><img src={cartItem}  alt='cart'/></Link>
                <div className='nav-cart-count'>0</div>
            </div>
  
            {/* Search form */}
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    );
  };
  
export default Navbar;
