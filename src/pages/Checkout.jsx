import React from 'react'
import { Link } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'
import { images } from '../constant'
import '../mediaquery/Checkout.css'
const Checkout = () => {

  return (
   <>
    <div className='checkout-wrapper py-5'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-7 home-wrapper-2">
                    <div className="checkout-left">
                        <h3 className='website-name'>Santys</h3>
                        
                        <nav style={{ "--bs-breadcrumb-divider": ">"}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to='/cart' className='text-dark'>Cart</Link></li>
     &nbsp; /
    <li className="breadcrumb-item active" aria-current="page">Information</li>
    &nbsp; /
    <li className="breadcrumb-item active">Shipping</li>
     &nbsp; /
    <li className="breadcrumb-item active" aria-current="page">Payment</li>
  </ol>
                     </nav>

                     <h4 className='title'>Contact Information</h4>
                     <p className="user-details">radzsantillan01@gmail.com</p>
                      <form action='' 
                      className='d-flex gap-15 flex-wrap justify-content-between'>

                         <div className='w-100'>
                     <select name='' className='form-control form-select' id=''>
                        <option value='' selected disabled>Select Country</option>
                        <option value='' select >Philipphines</option>
                                <option value='' select >America</option>
                                <option value='' select >Korea</option>
                                <option value='' select >Vietnam</option>
                                <option value='' select >Austria</option>
                     </select>  
                         </div> 

                         <div className='flex-grow-1'>
                            <input type="text" placeholder='First Name' className="form-control " />
                         </div>

                         <div className='flex-grow-1'>
                            <input type="text" placeholder='Last Name' className="form-control" />
                         </div>

                         <div className='w-100'>
                            <input type="text" placeholder='Address' className="form-control" />
                         </div>


                         <div className='w-100'>
                            <input type="text" placeholder='Apartment, Suite, etc' className="form-control" />
                         </div>
                         
                       

                         <div className='flex-grow-1'>
                       
                            <input type="text" placeholder='City' className="form-control " />
                      
                         </div>
                          
                         <div className='flex-grow-1'> 
                            <select name='' className='form-control form-select' id=''>
                                <option value='' selected disabled>Select State</option>
                               
                     </select>  
                     </div>
                         <div className='w-100'> 
                            <input type="text"  placeholder='Zipcode' className="form-control " />
                         </div>

                         <div className="w-100">
                            <div className='d-flex justify-content-between align-items-center'>
                                <Link to='/cart' className='text-dark return'><BiArrowBack className='me-2'/>Return to Cart</Link>
                                <Link to='/cart' className='buttonn'>Continue to Shipping</Link>
                            </div>
                         </div>
                      </form>

                    </div>
                </div>

                <div className="col-5 checkouts">
                    
                    <div className='d-flex justify-content-between align-items-center checkout-content'>
                        <div className='d-flex'>
                            <div className='checkout-images w-25'>
                                <img src={images.watch}  className='img-fluid'/>
                            </div>
                            <div> 
                            <h5 className='title'>Honor T1 7.0 1GB RAM 8GB ROM 7 Inch with Wi-Fi-3G Tablet</h5>
                            <p className='description'>S/ #BSCEDE</p>
                            </div>
                            
                         
                           
                       
                            </div>
                         <div>

                         </div>

                    </div>
                        

                    <div className='d-flex justify-content-between align-items-center mt-5'>

                     <div className='align-items-start ms-3'> 
                      <p className='sub'>Subtotal</p>
                      </div>
                      
                      <div className='align-items-end'> 
                        <p className='price'>$100</p>
                         </div>
                      
                    </div>


                         <div className='d-flex justify-content-between align-items-center mt-1'>

                     <div className='align-items-start ms-3'> 
                      <p className='sub'>Shipping</p>
                      </div>
                      
                      <div className='align-items-end'> 
                        <p className='price'>$19.65</p>
                         </div>
                      
                    </div>
                 

                  <div className='d-flex justify-content-between align-items-center mt-1'>

                     <div className='align-items-start ms-3'> 
                      <p className='sub'>Total</p>
                      </div>
                      
                      <div className='align-items-end d-flex gap-10'> 
                      <p className='usd'>USD</p>
                        <p className='price'>$119.65</p>
                        
                         </div>
                      
                    </div>


                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Checkout