import React from 'react'
import { images} from '../constant'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct';
import Container from "../components/Container";

const Home = () => {
  const services =[
    {
      image: images.service1,
      title: 'Free Shipping',
      subtitle: 'From all orders over $5.',
    },
    {
      image: images.service2,
      title: 'Daily Suprise Offers',
      subtitle: 'Save up to 25% off.',
    },
    {
      image: images.service3,
      title: 'Support 24/7',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      image: images.service4,
      title: 'Get Factory Default Price',
      subtitle: 'Affordable Prices.',
    },

    {
        image: images.service5,
        title: 'Secure Payments',
        subtitle: '100% Protected Payment',
      },
  ];

  return (

  
    
    <>
    <Container className='home-wrapper-1 py-5'>
    <div className="row">

<div className="col-6 rows1">
<div className="main-banner position-relative p-3">
  <img src={images.mainbanner} className='img-fluid rounded-3' alt='main banner'/>

  <div className="main-banner-content position-absolute">
    <h4>SUPERCHARGED FOR PROS.</h4>
    <h5>iPad S13+ Pro.</h5>
    <p>From $999.00 or $41.62/mo</p>
    <Link className='button'>Buy Now</Link>
  </div>
</div> 
</div>

<div className="col-6 rows2">

  <div className="d-flex  gap-10 flex-wrap justify-content-between align-items-center">

  <div className="small-banner position-relative p-3 ">
  <img src={images.catbanner1} className='img-fluid rounded-3' alt='main banner'/>

  <div className="small-banner-content position-absolute">
    <h4>SUPERCHARGED FOR PROS.</h4>
    <h5>iPad S13+ Pro.</h5>
    <p>From $999.00 or $41.62/mo</p>
    <Link className='button'>Buy Now</Link>
  </div>
</div> 


<div className="small-banner position-relative p-3">
  <img src={images.catbanner2} className='img-fluid rounded-3' alt='main banner'/>

  <div className="small-banner-content position-absolute">
    <h4>NEW ARRIVAL</h4>
    <h5>Buy IPad Air</h5>
    <p>From $999.00 or $41.62/mo</p>
    <Link className='button'>Buy Now</Link>
  </div>
</div> 

<div className="small-banner position-relative p-3">
  <img src={images.catbanner3} className='img-fluid rounded-3' alt='main banner'/>

  <div className="small-banner-content position-absolute ">
    <h4>NEW ARRIVAL</h4>
    <h5>Buy IPad Air</h5>
    <p>From $999.00 or $41.62/mo</p>
    <Link className='button'>Buy Now</Link>
  </div>
</div> 

<div className="small-banner position-relative p-3">
  <img src={images.catbanner4} className='img-fluid rounded-3' alt='main banner'/>

  <div className="small-banner-content position-absolute">
    <h4>NEW ARRIVAL</h4>
    <h5>Buy IPad Air</h5>
    <p>From $999.00 or $41.62/mo</p>
    <Link className='button'>Buy Now</Link>
  </div>
</div> 

</div>

  </div>


</div>
    </Container>
   
  
    <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
            {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

    <section className="home-wrapper-2 py-5">
       <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex  flex-wrap justify-content-between align-items-center ">

             <div className='d-flex gap-30 align-items-center'>
              <div>
               <h6>Laptop & Computer</h6>
               <p>10 Items</p>
              </div>
              <img src={images.laptop} className='img-fluid'/>
             </div>

             <div className='d-flex gap-30 align-items-center'>
              <div>
               <h6>Camera & Videos</h6>
               <p>10 Items</p>
              </div>
              <img src={images.camera} className='img-fluid'/>
             </div>

             <div className='d-flex gap-30 align-items-center'>
              <div>
               <h6>Smart Television</h6>
               <p>10 Items</p>
              </div>
              <img src={images.tv} className='img-fluid'/>
             </div>


             <div className='d-flex gap-30 align-items-center'>
              <div>
               <h6>Cameras</h6>
               <p>10 Items</p>
              </div>
              <img src={images.headphone} className='img-fluid'/>
             </div>
              
             <div className='d-flex gap-30 align-items-center'>
              <div>
               <h6>Gaming Pc</h6>
               <p>10 Items</p>
              </div>
              <div className='img'>
              <img src={images.gamingpc} className='img-fluid'/>
               </div>
              
             </div>

             <div className='d-flex gap-30 align-items-center'>
              <div>
               <h6>Iphone 14 Promax</h6>
               <p>10 Items</p>
              </div>
              <div className='img'>
              <img src="https://cdn.dxomark.com/wp-content/uploads/medias/post-125428/Apple-iPhone-14-Pro-Max_FINAL_featured-image-packshot-review-1.jpg" className='img-fluid'/>
               </div>
             </div>

             <div className='d-flex gap-30 align-items-center'>
              <div>
               <h6>PS5 </h6>
               <p>10 Items</p>
              </div>
              <div className='img'>
              <img src="https://assetsio.reedpopcdn.com/playstation-5-review-digitalfoundry-1604678146723.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"className='img-fluid'/>
              </div>
             
             </div>


             <div className='d-flex gap-30 align-items-center'>
              <div>
               <h6>Steam Deck</h6>
               <p>10 Items</p>
              </div>
              <div className='img'>
              <img src="https://pointieststick.files.wordpress.com/2021/07/steamdeck.png?w=1200"className='img-fluid'/>
              </div>
             </div>

            </div>

            
          </div>
        </div>
       </div>
    </section>

    <section className="featured-wrapper py-5 home-wrapper-2">
       <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className='section-heading'>
              Featured Collection
            </h3>
          </div>
         <ProductCard/>
        </div>
       </div>

    </section>
    
    <section className="famous-wrapper py-5 home-wrapper-2">
      
       <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img src={images.famous1} className='img-fluid'/>
              <div className="famous-content position-absolute ">
              <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>From $399or $16.62/mo for 24 mo.*</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative ">
              <img src={images.famous2} className='img-fluid'/>
              <div className="famous-content position-absolute ">
              <h5 className='text-dark'>STUDIO DISPLAY</h5>
              <h6 className='text-dark'>600 units of brightness</h6>
              <p className='text-dark'> 27-inch 5k Retina display</p>
              </div>
            </div>
          </div>


          <div className="col-3">
            <div className="famous-card position-relative ">
              <img src={images.famous3} className='img-fluid'/>
              <div className="famous-content position-absolute ">
              <h5 className='text-dark'>Iphone</h5>
              <h6 className='text-dark'> 13Pro.</h6>
              <p className='text-dark'> Iphone 13promax</p>
              </div>
            </div>
          </div>

        


          <div className="col-3">
            <div className="famous-card position-relative ">
              <img src={images.famous4} className='img-fluid'/>
              <div className="famous-content position-absolute ">
              <h5 className='text-dark'>home speakers</h5>
              <h6 className='text-dark'>Room-filling sound.</h6>
              <p className='text-dark'> From $699 or $116.58/mo. for 12 mo.*</p>
              </div>
            </div>
          </div>
        </div>
       </div>
    </section>

    <section className="special-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
        <div className="col-12">
            <h3 className='section-heading'>
              Special Products
            </h3>
          </div>
        </div>
       <div className="row">
       <SpecialProduct/>
       
       </div>
      </div>
    </section>

    <section className="featured-wrapper py-5 home-wrapper-2">
       <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className='section-heading'>
            Our Popular Products
            </h3>
          </div>
         <ProductCard/>
        </div>
       </div>

    </section>

    <section className="marque-wrapper py-5 home-wrapper-2">
         <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper ">

              <Marquee className='d-flex'>
               <div className='mx-4 ww-25'>
                <img src={images.brand1}/>
               </div>

               <div className='mx-4 w-25'>
                <img src={images.brand2}/>
               </div>

               <div className='mx-4 w-25'>
                <img src={images.brand3}/>
               </div>

               <div className='mx-4 w-25'>
                <img src={images.brand4}/>
               </div>

               <div className='mx-4 w-25'>
                <img src={images.brand5}/>
               </div>

               <div className='mx-4 w-25'>
                <img src={images.brand6}/>
               </div>

               <div className='mx-4 w-25'>
                <img src={images.brand7}/>
               </div>

               <div className='mx-4 w-25'>
                <img src={images.brand8}/>
               </div>
</Marquee>
              </div>
            </div>
          </div>
         </div>
    </section>
  

    <section className="featured-wrapper py-5 home-wrapper-2">
       <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className='section-heading'>
            Our Latest Blogs
            </h3>
          </div>
         <BlogCard/>
        </div>
       </div>

    </section>



    </>
  )
}

export default Home