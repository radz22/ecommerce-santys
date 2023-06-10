import React from 'react'
import { images } from '../constant'
import { Link } from 'react-router-dom'
const BlogCards = () => {
  return (
   <>
    <div className="col-6 mb-3">
   <div className="blog-card">
            <div className='card-image'>
                <img src={images.blog} alt='' className='img-fluid'/>
            </div>
             
            <div className="blog-content">
                <p className='date'>22 June, 2023</p>
                <h5 className="tittle">A beautiful sunday morning renaissance</h5>
                <p className="decs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem nostrum suscipit recusandae architecto at reiciendis incidunt obcaecati unde facilis.</p>
                <Link to='/blog/single' className='button'>Read More</Link>
            </div>
        </div>
        </div>

        <div className="col-6 mb-3">
        <div className="blog-card">
            <div className='card-image'>
                <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp" alt='' className='img-fluid'/>
            </div>
             
            <div className="blog-content">
                <p className='date'>22 June, 2023</p>
                <h5 className="tittle">A beautiful sunday morning renaissance</h5>
                <p className="decs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem nostrum suscipit recusandae architecto at reiciendis incidunt obcaecati unde facilis.</p>
                <Link to='/blog/single1' className='button'>Read More</Link>
            </div>
        </div>
        </div>

        <div className="col-6 mb-3">
        <div className="blog-card">
            <div className='card-image'>
                <img src="https://cdn.vanderbilt.edu/vu-wp0/wp-content/uploads/sites/59/2019/03/27124347/blogging-sm-pad.jpg" alt='' className='img-fluid'/>
            </div>
             
            <div className="blog-content">
                <p className='date'>22 June, 2023</p>
                <h5 className="tittle">A beautiful sunday morning renaissance</h5>
                <p className="decs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem nostrum suscipit recusandae architecto at reiciendis incidunt obcaecati unde facilis.</p>
                <Link to='/blog/single2' className='button'>Read More</Link>
            </div>
        </div>
        </div>

        <div className="col-6 mb-3">
        <div className="blog-card">
            <div className='card-image'>
                <img src="https://www.inma.org/img/digital_subscriptions-1800.jpg" alt='' className='img-fluid'/>
            </div>
             
            <div className="blog-content">
                <p className='date'>22 June, 2023</p>
                <h5 className="tittle">A beautiful sunday morning renaissance</h5>
                <p className="decs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem nostrum suscipit recusandae architecto at reiciendis incidunt obcaecati unde facilis.</p>
                <Link to='/blog/single3' className='button'>Read More</Link>
            </div>
        </div>
        </div>

      
   </>
  )
}

export default BlogCards