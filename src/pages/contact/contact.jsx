import React, { useContext } from 'react';
import image from "../../assets/doctor2.png"
import "./contact.css"
import { ContextData } from '../../context/contextData';

const ContactUs = () => {
  const {decodedToken}=useContext(ContextData)
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-8 mt-5">
          <div className="card shadow">
          <div className="card-body ">
              <h5 className="card-title text-center mb-4">Contact Us</h5>
              <div className="mb-4 ">
              <span>Doctor Email :</span><h5>Mohamed Ehab </h5>
              </div>
              <div className="mb-4">
              <span>Send this Message to :</span><h5>{decodedToken?.email}</h5>
              </div >
              <ul className="list-styled">
                <span className='text-primary'>Message <i class="fa-regular fa-message"></i></span>
                <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum, iure beatae perferendis temporibus officiis?</li>
              </ul>
            </div>
            <hr />
            <div className="card-body ">
              <h5 className="card-title text-center mb-4">Send Your Message</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Choose the doctor you want to send a message to</label>
                  <select name="" className="form-select" id="">
                    <option value="">Dr. John Doe</option>
                    <option value="">Dr. Jane Smith</option>
                    <option value="">Dr. Michael Johnson</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input type="email" className="form-control" id="email" value={decodedToken?.email} disabled />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" rows="5"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={image} className="card-img-top" alt="Contact Us" />
            <div className="card-body">
              <h5 className="card-title">Contact Information</h5>
              <p className="card-text">Email: engy.pharmacy.00@gmail.com</p>
              <p className="card-text">Phone: 02 35657871</p>
              <p className="card-text">Address: 13 Alexandria st. , Giza, Egypt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
