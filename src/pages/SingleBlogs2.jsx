import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'


const SingleBlogs2 = () => {
  return (
    <>
     <Meta title={"Dynamic Blog Name"}/>
<BreadCrumb title="Dynamic Blog Name"/>
        
<div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className="row">
                
                <div className="col-12">
                   <div className="single-blog-card">
                    <Link to='/blogs' className='d-flex align-items-center gap-10' >
                       <BiArrowBack className='fs-5'/> Go back to Blog
                        </Link>

                    <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
                     <img src="https://cdn.vanderbilt.edu/vu-wp0/wp-content/uploads/sites/59/2019/03/27124347/blogging-sm-pad.jpg" className='img-fluid w-100 my-4'/>
                     <p>Youre only as good as your last collection, which is an
enormouse pressure. I think there is something about luxury
its not something people need, but it's what they want. It
really pulls at their heart. I have a fantastic relationship
with money. Scelerisque sociosqu ullamcorper urna nisl mollis
vestibulim pretium commodo inceptos cum condimentum placerat
accumsan nisl ante vestibulum.</p>
                    </div> 
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default SingleBlogs2