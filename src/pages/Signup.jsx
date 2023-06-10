import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
   <>
    <Meta title={"Signup"}/>
<BreadCrumb title="Signup"/>
<div className="login-wrapper py-5 home-wrapper-2 ">


 <div className="container-xxl">
    <div className="row">
        <div className="col-12">
            <div className="aut-card">
                <h3 className='text-center'>Create Account</h3>
                <form action='' className='d-flex flex-column gap-30'>
                    <div>
                        <input type="name" name='name' placeholder='First Name ' className="form-control" />
                        </div>

                        <div>
                        <input type="lastname" name='lastname' placeholder='Last Name' className="form-control mt-1" />
                        </div>

                        <div>
                        <input type="email" name='email' placeholder='Email' className="form-control mt-1" />
                        </div>

                        <div>
                        <input type="password" name='password' placeholder='Password' className="form-control mt-1" />
                        </div>

                        <div>
                            <Link to='/recovery'>Forgot Password?</Link>
                            <div className='d-flex justify-content-center mt-4 gap-15 align-items-center'>
                              <Link  to='/login' className='button border-0 text-white '>Login</Link> 
                               <Link to='/signup' className='button signup border-0'>SignUp</Link>
                            </div>
                        </div>




                </form>
            </div>
        </div>
    </div>
 </div>
</div>
   </>
  )
}

export default Signup