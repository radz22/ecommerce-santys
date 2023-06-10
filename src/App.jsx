import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OurStore from './pages/OurStore'
import Blogs from './pages/Blogs'
import CompareProduct from './pages/CompareProduct'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import Forgotpassword from './pages/Forgotpassword'
import Signup from './pages/Signup'
import SingleBlog from './pages/SingleBlog'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import ShippingPolicy from './pages/ShippingPolicy'
import TermAndCondition from './pages/TermAndCondition'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import SingleBlogs1 from './pages/SingleBlogs1'
import SingleBlogs2 from './pages/SingleBlogs2'
import SingleBlogs3 from './pages/SingleBlogs3'
import SingleProduct2 from './pages/SingleProduct2'
import SingleProduct3 from './pages/SingleProduct3'
import SingleProduct4 from './pages/SingleProduct4'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path="product" element={<OurStore />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="product/single2" element={<SingleProduct2 />} />
        <Route path="product/single3" element={<SingleProduct3 />} />
                <Route path="product/single3" element={<SingleProduct3 />} />
                <Route path="product/single4" element={<SingleProduct4/>} />
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='blog/single' element={<SingleBlog/>}/> 
        <Route path='blog/single1' element={<SingleBlogs1/>}/> 
        <Route path='blog/single2' element={<SingleBlogs2/>}/> 
        <Route path='blog/single3' element={<SingleBlogs3/>}/> 
        <Route path='cart' element={<Cart/>}/> 
        <Route path='compare-product' element={<CompareProduct/>}/>
        <Route path='wishlist' element={<Wishlist/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='recovery' element={<Forgotpassword/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='refund-policy' element={<RefundPolicy/>}/>
        <Route path='shipping-policy' element={<ShippingPolicy/>}/>
        <Route path='term-conditions' element={<TermAndCondition/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        
       </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
