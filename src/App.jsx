import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/home.jsx"
import Navbar from './components/Navbar/navbar.jsx';
import Footer from './components/Footer/footer.jsx';
import ContactUs from './pages/contact/contact.jsx';
import Login from './pages/login/login.jsx';
import Signup from './pages/signup/signup.jsx';



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
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;

