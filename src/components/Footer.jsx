import React from 'react'
import { images } from '../constant'
import { Link } from 'react-router-dom'
import {BsLinkedin, BsGithub, BsFacebook, BsYoutube, BsInstagram, BsTwitter} from 'react-icons/bs'
import '../mediaquery/Footers.css'

const Footer = () => {
  return (
   <>
 
   <footer className='py-4'>
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="col-5">
          <div className='footer-top-data d-flex gap-30 align-items-center'>
             <img src={images.newletter}/>
             <h2 className='text-white mb-0'>Sign Up for Newsletter</h2>
          </div>
        </div>
        <div className="col-7">
        <div class="input-group ">
  <input type="text" 
  class="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"/>

  <span class="input-group-text  p-2" id="basic-addon2">
    Subscribe
  </span>
</div>
        </div>
      </div>
    </div>
  
   </footer>

   <footer className='py-4 foot'>
   <div className="container-xxl">
    <div className="row">

      <div className="col-4">
         <h4 className='text-white mb-4'>Contact Us</h4>
         <div>
          <address className='text-white'>Camarin Caloocan City <br/>
           Brgy. 177 Capitol <br/>
           ZIP CODE: 1400
          </address>
          <a href='#' className='mt-4 text-white d-block mb-1 num'>+918232456</a>
          <a href='#' className='mt-4 text-white d-block mb-0 gmail'>shopatsantysdevops@gmail.com</a>
          <div className='social-icons d-flex align-items-center gap-30 mt-4'>
            <a href=''>
            <BsLinkedin className='text-white fs-4' to=''/>
            </a>
            <a href=''>
              <BsGithub className='text-white fs-4' to=''/>
            </a>
            <a href=''>
              <BsFacebook className='text-white fs-4 ' to=''/>
            </a>
            <a href=''>
              <BsYoutube className='text-white fs-4' to=''/>
            </a>
            <a href=''>
              <BsInstagram className='text-white fs-4' to=''/>
            </a>
            <a href=''>
             <BsTwitter  className='text-white fs-4' to='' />
            </a>
          </div>
         </div>
      </div>

      <div className="col-3">
         <h4 className='text-white mb-4'>Information</h4>
         <div className='footer-link d-flex flex-column'>
          <Link to='/privacy-policy' className='text-white py-2 mb-1' >Privacy Policy</Link>
          <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
          <Link to='/shipping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
          <Link to='/term-conditions' className='text-white py-2 mb-1'>Terms of Service</Link>
          <Link to='/blogs' className='text-white py-2 mb-1'>Blogs</Link>
         </div>
      </div>

      <div className="col-3 ">
        <h4 className='text-white mb-4'>Account</h4>
        <div className='footer-link d-flex flex-column'>
          <Link className='text-white py-2 mb-1' >Search</Link>
          <Link className='text-white py-2 mb-1'>About Us</Link>
          <Link className='text-white py-2 mb-1'>Faq</Link>
          <Link className='text-white py-2 mb-1'>Contact</Link>
          <Link className='text-white py-2 mb-1'>Size Chart</Link>
         </div>
      </div>

      <div className="col-2">
         <h4 className='text-white mb-4'>Links</h4>
         <div className='footer-link d-flex flex-column'>
          <Link className='text-white py-2 mb-1' >Accessories</Link>
          <Link className='text-white py-2 mb-1'>Laptops</Link>
          <Link className='text-white py-2 mb-1'>Headphones</Link>
          <Link className='text-white py-2 mb-1'>Smart Watches</Link>
          <Link className='text-white py-2 mb-1'>Tables</Link>
         </div>
      </div>

    </div>
   </div>
   </footer>

   <footer className='py-4'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 down">
          <p className='text-center mb-0 text-white'>&copy: {new Date().getFullYear()}: Powered by Santy's </p>
        </div>
      </div>
    </div>
   </footer>
   </>
  )
}

export default Footer