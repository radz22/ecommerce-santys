import React from 'react'
import { images } from '../constant'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
  return (
    <>
    
    <div className='col-6 mb-3 specs'>
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div className='imgs'>
                    <img src="https://techpilipinas.com/wp-content/uploads/2019/08/apsp-samsung-galaxy-note-10-plus-front.jpg" className='img-fluid'/>
                </div>

                <div className="special-product-content">
                    <h5 className="brand">Havels</h5>
                    <h6 className="title">Samsung Galaxy Note10+ Mobile Phone; Sim...</h6>
                    <ReactStars
         count={5}
        size={24}
        value={4}
        edit={false}
       activeColor="#ffd700"
      />
                <p className="price"><span className='red-p'>$100</span> &nbsp; <strike>$200</strike></p>
                 <div className="discount-till d-flex align-items-center gap-10">
                    <p className='mb-0'><b>5 </b> days</p>
                    <div className='d-flex gap-10'>
                        <span className='badge rounded-circle p-3 bg-danger'>1</span>
                        <span  className='badge rounded-circle p-3 bg-danger'>1</span>
                        <span  className='badge rounded-circle p-3 bg-danger'>1</span>
                    </div>
                 </div>
                 <div className="prod-count my-4">
                        <p>Products: 5</p>
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width:'70%'}}></div>
</div>
                    </div>
                    <Link className='button '>Add to Cart</Link>
                </div>
            </div>
        </div>
    </div>

<div className='col-6 mb-3 specs'>
<div className="special-product-card">
    <div className="d-flex justify-content-between">
        <div className='imgs'>
            <img src="https://p-ph.ipricegroup.com/uploaded_b17afa4cd4fe238083c571c98f114b9c.jpg" className='img-fluid'/>
        </div>

        <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">Oppo Reno 8 Mobile Phone; Sim...</h6>
            <ReactStars
 count={5}
size={24}
value={4}
edit={false}
activeColor="#ffd700"
/>
        <p className="price"><span className='red-p'>$100</span> &nbsp; <strike>$200</strike></p>
         <div className="discount-till d-flex align-items-center gap-10">
            <p className='mb-0'><b>5 </b> days</p>
            <div className='d-flex gap-10'>
                <span className='badge rounded-circle p-3 bg-danger'>1</span>
                <span  className='badge rounded-circle p-3 bg-danger'>1</span>
                <span  className='badge rounded-circle p-3 bg-danger'>1</span>
            </div>
         </div>
         <div className="prod-count my-4">
                <p>Products: 5</p>
                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
<div class="progress-bar" style={{width:'70%'}}></div>
</div>
            </div>
            <Link className='button '>Add to Cart</Link>
        </div>
    </div>
</div>
</div>

<div className='col-6 mb-3 specs'>
<div className="special-product-card">
    <div className="d-flex justify-content-between">
        <div className='imgs'>
            <img src="https://cdn-files.kimovil.com/default/0006/53/thumb_552270_default_big.jpg" className='img-fluid'/>
        </div>

        <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">Huawei Nova 9 Mobile Phone; Sim...</h6>
            <ReactStars
 count={5}
size={24}
value={4}
edit={false}
activeColor="#ffd700"
/>
        <p className="price"><span className='red-p'>$100</span> &nbsp; <strike>$200</strike></p>
         <div className="discount-till d-flex align-items-center gap-10">
            <p className='mb-0'><b>5 </b> days</p>
            <div className='d-flex gap-10'>
                <span className='badge rounded-circle p-3 bg-danger'>1</span>
                <span  className='badge rounded-circle p-3 bg-danger'>1</span>
                <span  className='badge rounded-circle p-3 bg-danger'>1</span>
            </div>
         </div>
         <div className="prod-count my-4">
                <p>Products: 5</p>
                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
<div class="progress-bar" style={{width:'70%'}}></div>
</div>
            </div>
            <Link className='button '>Add to Cart</Link>
        </div>
    </div>
</div>
</div>


<div className='col-6 mb-3 specs'>
<div className="special-product-card">
    <div className="d-flex justify-content-between">
        <div className='imgs'>
            <img src="https://www.greentelcom.ph/storage/2022/05/REALME-RMX3393-R9-PRO-PLUS-8GB-256GB-AURORA-GREEN.jpg" className='img-fluid'/>
        </div>

        <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">Realme 9 Pro Mobile Phone; Sim...</h6>
            <ReactStars
 count={5}
size={24}
value={4}
edit={false}
activeColor="#ffd700"
/>
        <p className="price"><span className='red-p'>$100</span> &nbsp; <strike>$200</strike></p>
         <div className="discount-till d-flex align-items-center gap-10">
            <p className='mb-0'><b>5 </b> days</p>
            <div className='d-flex gap-10'>
                <span className='badge rounded-circle p-3 bg-danger'>1</span>
                <span  className='badge rounded-circle p-3 bg-danger'>1</span>
                <span  className='badge rounded-circle p-3 bg-danger'>1</span>
            </div>
         </div>
         <div className="prod-count my-4">
                <p>Products: 5</p>
                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
<div class="progress-bar" style={{width:'70%'}}></div>
</div>
            </div>
            <Link className='button '>Add to Cart</Link>
        </div>
    </div>
</div>
</div>
</>
  )
}

export default SpecialProduct