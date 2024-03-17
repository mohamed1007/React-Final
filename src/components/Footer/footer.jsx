import React from 'react';

const Footer = () => {
  return (
    <footer className="position-fixed bg-dark text-light py-4" style={{  bottom: '0', width: '100%' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>123 Street Name, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <p>Stay connected with us on social media:</p>
            <div className="d-flex">
              <a href="#" className="text-light me-3">Facebook</a>
              <a href="#" className="text-light me-3">Twitter</a>
              <a href="#" className="text-light me-3">Instagram</a>
            </div>
          </div>
        </div>
        <hr className="mt-4 mb-3" />
        <div className="text-center">
          <p>&copy; 2024 My Pharmacy Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
