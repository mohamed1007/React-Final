import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/home.jsx"
import Navbar from './components/Navbar/navbar.jsx';
import Footer from './components/Footer/footer.jsx';
import ContactUs from './pages/contact/contact.jsx';
import Login from './pages/login/login.jsx';
import Signup from './pages/signup/signup.jsx';
import Categories from './pages/categories/categories.jsx';
import Medicines from './pages/medicines/medicines.jsx';
import Medicine from './pages/medicine/medicine.jsx';
import Category from './pages/category/category.jsx';
import About from './pages/about/about.jsx';



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/medicines" element={<Medicines/>} />
          <Route path="/medicines/:name" element={<Medicine/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/category/:name" element={<Category/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;

