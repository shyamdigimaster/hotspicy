import React from 'react'
import Home from '../Home';
import Milkchocolate from '../Image/milkchocolate.jpg';
import './Milkcho.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Heart from '../Image/heart.svg'
import Footer from '../Component/Footer';
export default function Milkcho() {
  return (
    <>
         <Home/>
    

    <div className='container'>
<div className='row'>
  <div className='col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
    <img src={Milkchocolate} className='img-fluid milkcho' />


  </div>

  <div className='col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
    <div className='card card shadow p-3 mb-5 bg-body rounded mt-3'>
<div className='row'>
  <div className='col-xl-12 col-xxl-12 col-md-12 col-lg-12 col-sm-12 col-xs-12'>
  <h4 >Milk chocolate Modak in complimentary boxes</h4>
  </div>
</div>

<div className='row mt-3 '>
  <div className='col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
  <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>

  </div>
</div>


<div className='row mt-3'>
  <div className='col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
  <span>₹500.00</span>
  </div>
</div>

<div className='row mt-3 '>
  <div className='col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
  <span className='text-muted'>Quality</span>
  </div>
</div>



<div className='row mt-3 '>
  <div className='col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
  <button className='text-end Addtocard text-center p-2 '>Add to card</button>
  </div>

</div>



    </div>


  </div>


</div>

    </div>

    <Footer/>
    </>

  )
}
