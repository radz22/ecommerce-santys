import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {Helmet} from "react-helmet";
import Meta from '../components/Meta';
import { images } from '../constant'
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ProductCard from '../components/ProductCard'
import '../mediaquery/ourstore.css'


const OurStore = () => {
 
  const [grid, setGrid] = useState(4)


  return (
    <>
    <Meta title={"Our Store"}/>
    <BreadCrumb title="Our Store"/>
    <div className="store-wrapper home-wrapper-2 py-5">
         <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className='filter-card mb-3'>
                     <h3 className="filter-title">Shop by  Categories</h3>
                     <div>
                      <ul className='ps-0'>
                        <li>Watch</li>
                        <li>Tv</li>
                        <li>Camera</li>
                        <li>Laptop</li>
                      </ul>
                     </div>
                    </div>

                    <div className='filter-card mb-3'>
                    <h3 className="filter-title">Filter By</h3>

                    <div>
                     <h5 className="sub-title">Availability</h5>
                     <div> 
                     <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    In Stock (1)
  </label>
                   </div>
              <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
  <label class="form-check-label" for="defaultCheck2">
   Out of Stock (0)
  </label>
              </div>
              </div>
                    </div>
                    <h5 className="sub-title">Price</h5>
                    <div className='d-flex align-items-center gap-10'>
                    <div class="form-floating ">
  <input type="email" class="form-control py-1" id="floatingInput" placeholder="From"/>
  <label hmtlFor="floatingInput">From</label>
                    </div>
                    <div class="form-floating ">
  <input type="email" class="form-control py-1" id="floatingInput" placeholder="To"/>
  <label hmtlFor="floatingInput1">To</label>
                    </div>
                    </div>
                    
                    <h5 className="sub-title">Colors</h5>
                    <div className="col-8 d-flex align-items-center justify-content-center ps-0">
                    <div>
                        
                        <ul className='colors'>
                        <li className='black'></li>
                          <li className='red'></li>
                          <li className='yellow'></li>
                          <li className='green'></li>
                          <li className='yellowgreen'></li>
                          <li className='pink'></li>
                          <li className='violet'></li>
                          <li className='blue'></li>
                          <li className='grey'></li>
                          <li className='brown'></li>
                          <li className='orange'></li>
                          <li className='aqua'></li>
                          <li className='rebeccapurple'></li>
                          <li className='navyblue'></li>
                          <li className='darkred'></li>
                         
                          
                        </ul>
                        </div>
                    </div>
                       
                    <h5 className="sub-title">Size</h5>
                   <div>
                   <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="color-1"/>
  <label class="form-check-label" for="defaultCheck1" id="color-1">
    S (2)
  </label>
                   </div>
                   <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="color-2"/>
  <label class="form-check-label" for="defaultCheck1" id="color-2">
    M (2)
  </label>
                   </div>
                   </div>

                    </div>


                    <div className='filter-card mb-3'>
                    <h3 className="filter-title">Product Tags</h3>
                    
                     <div className="product-tages d-flex flex-wrap align-items-center gap-10">
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                     </div>
                    </div>
                   

                    <div className='filter-card mb-3'>
                    <h3 className="filter-title">Random Product</h3>
                    <div className="random-products mb-3 d-flex">
                      <div className="w-50"><img src={images.watch} className='img-fluid'/></div>
                      <div className="w-50">
                        <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                        <ReactStars
         count={5}
        size={24}
        value={3}
        edit={false}
       activeColor="#ffd700"
      />
      <b>$ 300</b>
                      </div>
                     
                    </div>

                    <div className="random-products mb-3 d-flex">
                      <div className="w-50"><img src={images.watch} className='img-fluid'/></div>
                      <div className="w-50">
                        <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                        <ReactStars
         count={5}
        size={24}
        value={3}
        edit={false}
       activeColor="#ffd700"
      />
      <b>$ 300</b>
                      </div>
                     
                    </div>
                    </div>
                </div>
                
                <div className="col-9">
                  <div className="filter-sort-grid mb-4">
                   <div className="d-flex justify-content-between align-items-center ">
                   <div className="d-flex align-items-center gap-10">
                      <p className='mb-0 d-block ' style={{width:'100px'}}>Sort By:</p>
                     <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                  >
                    <option className='options' value="manual">Featured</option>
                    <option className='options' value="best-selling">Best selling</option>
                    <option className='options' value="title-ascending">Alphabetically, A-Z</option>
                    <option className='options' value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option className='options' value="price-ascending">Price, low to high</option>
                    <option className='options' value="price-descending">Price, high to low</option>
                    <option className='options' value="created-ascending">Date, old to new</option>
                    <option className='options' value="created-descending">Date, new to old</option>
                  </select> 
                    </div>
                    <div>
                       <div className="d-flex align-items-center gap-15">
                        <p className="totalproducts mb-0 pod">21 Products</p>
                        <div className='d-flex gap-10 align-items-center grid'>
                          <img src={images.gr4}  className='d-block img-fluid' alt='' onClick={() =>{
                            setGrid(3); }}/>
                          <img src={images.gr3}  className='d-block img-fluid' alt='' onClick={() =>{
                            setGrid(4); }}/>
                          <img src={images.gr2}  className='d-block img-fluid' alt=''
                          onClick={() =>{
                            setGrid(6); }}/>
                          <img src={images.gr1}  className='d-block img-fluid' alt='' onClick={() =>{
                            setGrid(12); }}/>
                        </div>
                       </div>
                    </div>
                   </div>
                            
                  </div>
                  <div className="product-list pb-5 ">
                    <div className='d-flex gap-10 flex-wrap'> 
                  <ProductCard grid={grid}/>
                  </div>
                  </div>
                </div>



            </div>
         </div>
    </div>
    </>
  )
}

export default OurStore