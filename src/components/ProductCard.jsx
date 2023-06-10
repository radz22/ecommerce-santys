import React from 'react'
import { images } from '../constant'
import ReactStars from "react-rating-stars-component";
import {  Link, useLocation } from 'react-router-dom'
import { useState } from 'react';
import Heart from "react-heart"

const ProductCard = (props) => {

   let location = useLocation();
   const {grid} = props;

    const [active, setActive] = useState(false)
    const [activee, setActivee] = useState(false)
    const [actives, setActives] = useState(false)
    const [activess, setActivess] = useState(false)
  return (
    <> 
       
       <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}>
      
        <div className='product-card position-relative'> 
          <div className="wishlist-icon position-absolute">
            <div style={{ width: "1rem" }}>    
			<Heart isActive={active} onClick={() => setActive(!active)}/>
		</div>
          
          </div>
          <Link
          to='/product/single'
          className="product-cards"
        >
         <div className="product-image">
            <img src="https://i.ebayimg.com/images/g/gJ8AAOSwv-NfJUQS/s-l1600.jpg" className="img-fluid" alt="product image" />
            <img src="https://m.media-amazon.com/images/I/718mNHtUZAL._AC_UF1000,1000_QL80_.jpg" className="img-fluid" alt="product image" />
            
          </div>
          </Link>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aliquam eum facere, ratione ducimus dignissimos culpa maxime quod corporis. Id!</p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
            <Link> 
            <img src={images.prodcompare}/>
             </Link>
             
              
             <Link>  <img src={images.view}/> 
             </Link>
             
              
             <Link>  <img src={images.addcart}/> </Link>
              
              
            </div>
          </div>
          </div>
        
      </div>

      <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}>
      
        <div className='product-card position-relative'> 
          <div className="wishlist-icon position-absolute">
            <div style={{ width: "1rem" }}>
			<Heart isActive={activee} onClick={() => setActivee(!activee)}/>
		</div>
          
          </div>
          <Link
          to='/product/single2'
          className="product-cards"
        >
         <div className="product-image">
            <img src={images.tab1} className="img-fluid" alt="product image" />
            <img src={images.tab} className="img-fluid" alt="product image" />
          </div>
          </Link>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
              classNames="star"
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aliquam eum facere, ratione ducimus dignissimos culpa maxime quod corporis. Id!</p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
            <Link> 
            <img src={images.prodcompare}/>
             </Link>
             
              
             <Link>  <img src={images.view}/> 
             </Link>
             
              
             <Link>  <img src={images.addcart}/> </Link>
              
            </div>
          </div>
          </div>
        
      </div>


      <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}>
      
        <div className='product-card position-relative'> 
          <div className="wishlist-icon position-absolute">
            <div style={{ width: "1rem" }}>
			<Heart isActive={actives} onClick={() => setActives(!actives)}/>
		</div>
          
          </div>
          <Link
          to='/product/single3'
          className="product-cards"
        >
         <div className="product-image">
            <img src="https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/184960_2022_1.jpg" className="img-fluid" alt="product image" />
            <img src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-14-pro-max-gold-back.png?v=34" className="img-fluid" alt="product image" />
          </div>
          </Link>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
              classNames="star"
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aliquam eum facere, ratione ducimus dignissimos culpa maxime quod corporis. Id!</p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
            <Link> 
            <img src={images.prodcompare}/>
             </Link>
             
              
             <Link>  <img src={images.view}/> 
             </Link>
             
              
             <Link>  <img src={images.addcart}/> </Link>
              
            </div>
          </div>
          </div>
        
      </div>


      <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}>
      
        <div className='product-card position-relative'> 
          <div className="wishlist-icon position-absolute">
            <div style={{ width: "1rem" }}>
			<Heart isActive={activess} onClick={() => setActivess(!activess)}/>
		</div>
          
          </div>
          <Link
          to='/product/single4'
          className="product-cards"
        >
         <div className="product-image">
            <img src={images.watch} className="img-fluid" alt="product image" />
            <img src={images.watch1} className="img-fluid" alt="product image" />
          </div>
          </Link>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
              classNames="star"
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta aliquam eum facere, ratione ducimus dignissimos culpa maxime quod corporis. Id!</p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
            <Link> 
            <img src={images.prodcompare}/>
             </Link>
             
              
             <Link>  <img src={images.view}/> 
             </Link>
             
              
             <Link>  <img src={images.addcart}/> </Link>
              
            </div>
          </div>
          </div>
        
      </div>

   
      
       
       


  



   
    </>
    
  )
}

export default ProductCard