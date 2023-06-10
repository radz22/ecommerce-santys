import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall, BiInfoCircle } from 'react-icons/bi'
import '../mediaquery/Contact.css'
const Contact = () => {
  return (
    <>
      <Meta title={"Contact"}/>
    <BreadCrumb title="Contact"/>
    <div className="contact-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341.02904060103225!2d121.05851114368784!3d14.75194290672135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b19b9eeaaaef%3A0x2de6abbba35898ac!2sNicdao%20Compound!5e0!3m2!1sen!2sph!4v1685282285765!5m2!1sen!2sph" 
          height='450'
          className='border-0 w-100 '
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          
          </iframe>
          
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4">Contact </h3>
                <form action='' className='d-flex flex-column gap-15'>
                <div>
                    <input type="text" className="form-control" placeholder='Name' />
                  </div>

                  <div>
                    <input type="email" className="form-control" placeholder='Email' />
                  </div>

                  <div>
                    <input type="tel" className="form-control" placeholder='Mobile Number' />
                  </div>

                  <div>
                    <textarea name="" 
                    id="" 
                    placeholder='Comments'
                    className='w-100 form-control' 
                    cols="30" rows="10">
                    
                    </textarea>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>

              <div>
              <h3 className="contact-title mb-4">Get in Touch wih us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineHome/>
                    <address className='mb-0'>Camarin Caloocan City Brgy. 177 Capitol </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><BiPhoneCall/>
                    <a href='tel: +91 8232456'>+91 8232456</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineMail/>
                     <a href='shopatsantysdevops@gmail.com'>shopatsantysdevops@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle/>
                      <p className='mb-0'> Monday - Friday 10 AM - 8 PM</p>
                      </li>
                  </ul>
                </div>
              </div>
            
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact