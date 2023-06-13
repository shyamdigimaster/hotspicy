import React from 'react'
import Logo from '../src/Image/coffee-logo-design-creative-idea-logo-elements-2.png'
import './App.css'
// import Carouselo from './Component/Carouselo'
import Search from '../src/Image/search.svg'
import Account from '../src/Image/person.svg'
import bag from '../src/Image/bag.svg'
import heart from '../src/Image/heart-fill.svg'
import { Link } from 'react-scroll';
export default function Home() {
 

  return (

    <>
<div className=' header '>
<nav class="navbar  navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <img src={Logo} class='Logo'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
        
        <a className='list nav-link text-dark'  href="#">Home</a>
        </li>

        <li class="nav-item">
        <Link 
activeClass="active" 
to="PopularProduct" 
spy={true} 
smooth={true} 
duration={500}>
 <a className='list nav-link text-dark'  href="#"> Products</a></Link>
        {/* <a className='list nav-link text-dark'  href="#"> Products</a> */}
        </li>
        <li class="nav-item ">
        <Link 
activeClass="active" 
to="deal" 
spy={true} 
smooth={true} 
duration={500}>
 <a className='list nav-link text-dark'  href="#"> Deals</a></Link>
        </li>
        <li class="nav-item ">
        <Link 
activeClass="active" 
to="Blog" 
spy={true} 
smooth={true} 
duration={500}>
 <a className='list nav-link text-dark'  href="#"> Blog</a></Link>
        </li>



       

      </ul>
      <form className="d-flex text-sm-center gap-sm-4 text-md-center formlogo">
    <img src={Search} className='img-fluid'/>
    <img src={Account} className='img-fluid'/>
    <img src={heart} className='img-fluid'/>
    <img src={bag} className='img-fluid' />
      </form>
    </div>
  </div>
</nav>


<div className='row'>
    <div className='col-xl-12 col-xxl-12 col-md-12 col-sm-12 col-xs-12'>

    </div>
</div>
</div>



  </>
 
  )
}
