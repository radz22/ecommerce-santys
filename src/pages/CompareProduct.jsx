import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { images } from '../constant'
import Colors from '../components/Colors';
import '../mediaquery/CompareProduct.css'

const CompareProduct = () => {
    
  return (
    
   <>
   <Meta title={"Compare Products"}/>
<BreadCrumb title="Compare Products"/>
 <div className="compare-product-wrapper py-5 home-wrapper-2">
    <div className="container-xxl">
        <div className="row">
            <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img src={images.cross} className='position-absolute cross img-fluid'/>
                    <div className="product-card-image">
                        <img src="https://www.ubuy.com.ph/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFiYkluOXJYR0wuX0FDX1NMMTUwMF8uanBn.jpg" className='img-fluid'/>
                    </div>
                    <div className="compare-product-details mt-5">
                        <h5 className='title'>Honor TI 7.0 1 GB RAM 8 GB ROM 7 INCH
                        With Wi-Fi+3G Tablet</h5>
                        <h6 className='price mb-3 mt-3'>$ 100.00</h6>
                        <div>
                            <div  className='product-details'>
                               <h5>Brand:</h5>
                               <p>Havels </p>
                            </div>
                            <div  className='product-details'>
                               <h5>Type:</h5>
                               <p>Watch </p>
                            </div>
                            <div  className='product-details'>
                               <h5>Brand:</h5>
                               <p>Havels </p>
                            </div>
                            <div  className='product-details sides'>
                               <h5>Available:</h5>
                               <p>In Stocks </p>
                            </div>
                            <div  className='product-details'>
                               <h5>Color:</h5>
                              <Colors/>
                            </div>

                            <div  className='product-details'>
                               <h5>Size:</h5>
                               <div className='d-flex gap-10'>
                                <p>S</p>
                                <p>M</p>
                               </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

                
            </div>

            <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img src={images.cross} className='position-absolute cross img-fluid'/>
                    <div className="product-card-image">
                        <img src="https://www.inno3d.com/assets/files/product_image/image/4070_TWIN_X2_OC_set.png" className='img-fluid h-100'/>
                    </div>
                    <div className="compare-product-details mt-5">
                        <h5 className='title'>Honor TI 7.0 1 GB RAM 8 GB ROM 7 INCH
                        With Wi-Fi+3G Tablet</h5>
                        <h6 className='price mb-3 mt-3'>$ 100.00</h6>
                        <div>
                            <div  className='product-details'>
                               <h5>Brand:</h5>
                               <p>Havels </p>
                            </div>
                            <div  className='product-details'>
                               <h5>Type:</h5>
                               <p>Watch </p>
                            </div>
                            <div  className='product-details'>
                               <h5>Brand:</h5>
                               <p>Havels </p>
                            </div>
                            <div  className='product-details sides'>
                               <h5>Available:</h5>
                               <p>In Stocks </p>
                            </div>
                            <div  className='product-details'>
                               <h5>Color:</h5>
                              <Colors/>
                            </div>

                            <div  className='product-details'>
                               <h5>Size:</h5>
                               <div className='d-flex gap-10'>
                                <p>S</p>
                                <p>M</p>
                               </div>
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

export default CompareProduct