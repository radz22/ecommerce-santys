import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { images } from '../constant'
import '../mediaquery/Wishlist.css'

const Wishlist = () => {
  return (
   <>
   <Meta title={"Wishlist"}/>
<BreadCrumb title="Wishlist"/>
 <div className="wishlist-wrapper py-5 home-wrapper-2">
    <div className="container-xxl">
        <div className="row d-flex flex-wrap">
            <div className="col-3">
                <div className="wishlist-card position-relative">
                <img src={images.cross} className='position-absolute cross img-fluid'/>
                    <div className="wishlist-card-image">
                    <img src="https://assetsio.reedpopcdn.com/playstation-5-review-digitalfoundry-1604678146723.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" className='img-fluid '/>
                    </div>
                    <div className='bg-white py-3'> 
                    <h5 className='title'>Honor TI 7.0 1 GB RAM 8 GB ROM 7 INCH
                        With Wi-Fi+3G Tablet</h5>
                    <h6 className='price'>$ 100</h6>
                    </div>
                </div>
            </div>

            <div className="col-3">
                <div className="wishlist-card position-relative">
                <img src={images.cross} className='position-absolute cross img-fluid'/>
                    <div className="wishlist-card-image">
                    <img src="https://cdn.dxomark.com/wp-content/uploads/medias/post-125428/Apple-iPhone-14-Pro-Max_FINAL_featured-image-packshot-review-1.jpg" className='img-fluid '/>
                    </div>
                    <div className='bg-white py-3'> 
                    <h5 className='title'>Honor TI 7.0 1 GB RAM 8 GB ROM 7 INCH
                        With Wi-Fi+3G Tablet</h5>
                    <h6 className='price'>$ 100</h6>
                    </div>
                </div>
            </div>

            <div className="col-3">
                <div className="wishlist-card position-relative">
                <img src={images.cross} className='position-absolute cross img-fluid'/>
                    <div className="wishlist-card-image">
                    <img src="https://pointieststick.files.wordpress.com/2021/07/steamdeck.png?w=1200" className='img-fluid w-100'/>
                    </div>
                    <div className='bg-white py-3'> 
                    <h5 className='title'>Honor TI 7.0 1 GB RAM 8 GB ROM 7 INCH
                        With Wi-Fi+3G Tablet</h5>
                    <h6 className='price'>$ 100</h6>
                    </div>
                </div>

            </div>

            <div className="col-3">
                <div className="wishlist-card position-relative">
                <img src={images.cross} className='position-absolute cross img-fluid'/>
                    <div className="wishlist-card-image">
                    <img src="https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/184960_2022_1.jpg" className='img-fluid'/>
                    </div>
                    <div className='bg-white py-3'> 
                    <h5 className='title'>Honor TI 7.0 1 GB RAM 8 GB ROM 7 INCH
                        With Wi-Fi+3G Tablet</h5>
                    <h6 className='price'>$ 100</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
   </>
  )
}

export default Wishlist