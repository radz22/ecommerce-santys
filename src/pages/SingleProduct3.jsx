import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';


const SingleProduct3 = () => {
    const [count, setCount] = useState(1)

    const image = {
      src: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/184960_2022_1.jpg"
     
    };
  
  
   
      const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
    <Meta title={"Product Name"}/>
<BreadCrumb title="Product Name"/>

<div className="main-prodcut-wrapper py-5 home-wrapper-2 ">
    <div className="container-xxl">
        <div className="row">

            <div className="col-6">
              <div className="main-product-images">
                <div>
                   <ReactImageMagnify {...{
        smallImage: {
          alt: 'Magnified Image',
          isFluidWidth: true,
          src: image.src,
          
        },
        largeImage: {
          src: image.src,
          width: 1200,
          height: 1300
        }
      }} /></div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
              <div><img src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-14-pro-max-gold-back.png?v=34" className='img-fluid'/></div>
              <div><img src="https://res.cloudinary.com/grover/image/upload/f_webp,q_auto/b_white,c_pad,dpr_2.0,h_500,w_520/f_auto,q_auto/v1668184045/mkhxplghptqazrlf6oeu.png" className='img-fluid'/></div>
              <div><img src="https://telecomtalk.info/wp-content/uploads/2022/09/iphone-14-pro-always-on-display-compatible.jpg"className='img-fluid'/></div>
              <div><img src="https://static.vecteezy.com/system/resources/previews/011/765/951/original/white-smartphone-model-apple-iphone-14-pro-it-industry-novelty-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg" className='img-fluid'/></div>
              </div>
            </div>

            <div className="col-6">

              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className='title'>Iphone Bulk 10 Pack Multi Colored</h3>
                </div>
                <div className="border-bottom">
                  <p className='price mt-3 mb-4'>$ 100</p>
                </div>
               
                <div className='d-flex align-items-center gap-10'>
                <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
             <p className='mb-0 rev'>(2 reviews)</p>
                </div>

                <div className='main-product-details-content py-4'>
                  <p className='type'>Type: <span >Iphone</span></p>
                  <p className='type'>Brand: <span >Havells</span></p>

                <div className="categories">
                   <h3 className='catego'>Categories:</h3>
                   <p className='type'>airpods, cameras Computers & Laptop, headphone, mini speaker, our store, Portable, Speaker, smart phones, Smart Television, Smartwatches</p>
                </div>

                <div className=' d-flex align-items-center gap-10'>
                  <h3 className='tags'>Tags <span>headphone, laptop, mobile, oppo, speaker</span></h3>  
                </div>
                
                <div className='mt-3'>
                <h3 className='avail'>Availibility: <span>541 in Stock</span></h3>
                </div>
                
                <div className='mt-3'>
                <h3 className='size '>Size</h3>
                <div className='d-flex align-items-center gap-15'>
                <p className='sizes'> S </p>
                <p className='sizes'> M </p>
                </div>
                </div>

                <div className='d-flex align-items gap-50'>
                  <h3 className='quan'>Quantity</h3>

                
                 <p className='plus mb-0'>{count}</p>
                 <div className='d-flex flex-column gap-10 buttom'> 
                  <button className='border-0 but'  onClick={() => setCount(count  - 1)}>-</button>
                  <button className='border-0 but' onClick={() => setCount(count  + 1)}>+</button>
                  </div>
                  <div>
                  <button className='button'>ADD TO CART</button>
                  <button className='buttons mx-3'>Buy It Now</button>
                  </div>
                </div>


                
                </div>
              </div>
            </div>
        </div>
    </div>
</div>

<div className="description-wrapper py-5 home-wrapper-2">
 <div className="container-xxl">
    <div className="row">
        <div className="col-12">
        <h4 >Description</h4>
            <div className='bg-white p-3'>        
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus praesentium tempore commodi doloremque quod placeat totam, error et ut, fuga quae ipsum, rem alias aliquid velit beatae deleniti numquam.</p>
        </div>
        </div>
    </div>
 </div>
</div>

<section className="reviews-wrapper home-wrapper-2">
    <div className="container-xxl">
        <div className="row">
            <div className="col-12">
             <div className="review-inner-wrapper">
             <div className="review-head d-flex justify-content-between align-items-end  ">
               <div>
                <h3 className='mb-2'>Customer Reviews</h3>
               
               <div className='d-flex align-items-center gap-10'>
               <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className='mb-0'>Base on 2 Reviews</p>
               </div>
               </div>

               <div>  {
               orderedProduct &&
              <div>
                <a href='' className='text-dark text-decoration-underline'>Write a Review</a></div>
               }
               </div>

            </div>

            <div className="review-form py-4 mt-4">
             
            <form action='' className='d-flex flex-column gap-15'>
              <h4>Write a Review</h4>
              <div>
              <ReactStars
              count={5}
              size={24}
              value={4}
              edit={true}
              activeColor="#ffd700"
            />
              </div>
                  <div>
                    <textarea name="" 
                    id="" 
                    placeholder='Comments'
                    className='w-100 form-control ' 
                    cols="30" rows="7">
                    
                    </textarea>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button className='button border-0 '>Submit Review</button>
                  </div>
                </form>

            </div>

              <div className="reviews">
                <div className="review ">
                  <div className='d-flex align-items-center gap-10'>
                    <h6 className='mb-0'>RadzSkie</h6>
                  <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
                     </div>

            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas commodi quod, laborum minus blanditiis cum reprehenderit numquam id quo nulla, distinctio tempora officiis laudantium, pariatur eum recusandae mollitia perspiciatis animi.

            </p>
                </div>
              </div>

             </div>
            </div>
        </div>
    </div>
</section>


<section className="popular-wrapper py-5 home-wrapper-2">
       <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className='section-heading'>
              Our Popular Products
             </h3>
          </div>
        </div>
        <div className="row">

          <ProductCard/>
         
          
        </div>
       </div>

    </section>
   </>
  )
}

export default SingleProduct3