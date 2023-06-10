import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import '../mediaquery/Blogs.css'
import BlogCards from './BlogCards';


const Blogs = () => {
  return (
   <>
   <Meta title={"Blogs"}/>
    <BreadCrumb title="Blogs"/>
    <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className="row">
                <div className="col-3 blogss">
                <div className='filter-card mb-3'>
                     <h3 className="filter-title">Find by  Categories</h3>
                     <div>
                      <ul className='ps-0'>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/store'><li>Our Store</li> </Link>
                        <li>Blogs</li>
                        <Link to='/contact'><li>Contact</li> </Link>
                      </ul>
                     </div>
                    </div>
                </div>


                <div className="col-9">

                    <div className="row">

                        <BlogCards/>
                      

                     

                    </div>
                </div>
            </div>
        </div>

    </div>
   </>
  )
}

export default Blogs