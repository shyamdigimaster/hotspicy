import React, { useEffect } from 'react'
import Choco from '../Image/choco1.jpeg'
import Choco2 from '../Image/choco3.jpeg'
import './cards.css';
import Aos from 'aos';
import 'aos/dist/aos.css'; 


export default function Card() {

  useEffect(()=>{
    Aos.init();
  },[])
  return (
      <>

      <div className='container'>
        <div className='row mt-4  ' >
<div className='col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12' data-aos="fade-left">
<img src={Choco} className='img-fluid Imageing '/>

<div className='row chocolate'>
  <div className='col-xl-12 col-xxl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
    <p className='text-center'>Die eating chocolate ,and you die happy</p>
  </div>
  </div>
 
  <div className='row'>
  <div className='col-xl-6 col-xxl-6 col-lg-6 col-md-12 col-sm-8 col-xs-8'>
    <p className='text-white text-center Thanksacrunch'>Thanks a crunch!</p>
  </div>

  <div className='col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-4 col-xs-4'>
  <button className='text-end Crunch text-center p-2 '>crunch!</button>
  </div>
  

</div>
</div>






<div className='col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 'data-aos="fade-right">
<img src={Choco2} className='img-fluid w-100 h-100 Imageing darkchocolate'/>

<div className='row chocolate'>
  <div className='col-xl-12 col-xxl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
    <p className='text-center slicedchocolate'>Close-Up Photo Of Sliced Chocolates</p>
  </div>
  </div>
 
  <div className='row'>
  <div className='col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
    <p className='text-white text-center Thanksacrunch'>Life is like a box of chocolates....
</p>
  </div>
</div>

<div className='row'>
  <div className='col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12 mt-sm-4 col-xs-12'>
    <div className='boxofbutton'>

    
  <button className=' text-center p-2 boxofchocolates'>box of chocolates</button>
  </div>
  </div>
  

</div>
</div>
</div>

        </div>
     
      </>
  )
}
