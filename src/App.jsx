import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/home.jsx"
import Navbar from './components/Navbar/navbar.jsx';
import Footer from './components/Footer/footer.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;

