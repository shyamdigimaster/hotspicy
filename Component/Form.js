import React from 'react'
import Avatar from './FormImage/6386976.png'
import Name from './FormImage/full-name-11.png'
import Address from './FormImage/address-7.png'
import Phone from './FormImage/phone-68.png'
import Email from './FormImage/email-98.png'
import DOB from './FormImage/date-of-birth.png'

import './Form.css'
export default function Form() {
  return (
    <>
   <div className='container shadow p-3 mb-5 bg-white rounded mt-5'>
    <div className='row'>

        <div className='col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <center>
            <img src={Avatar} className=' img-fluid name'/>

            </center>
        </div>
    </div>


    <div className='row'>

<div className='col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
    <center>
  <p className='display-5 email'>Abinathana@gamil.com</p>  

    </center>
</div>


<div className='row'>
<div className='col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
    <center>
  <p className='display-5'>Account Info</p>  
    </center>
</div>


</div>




<div className='row mt-5'>
<div className='col-xl-6 col-xxl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
    <div className=' d-flex v-stack gap-5'>
    <img src={Name} className=' name'/>
  <p className='h3'>First Name</p>

    </div>


</div>


<div className='col-xl-6 col-xxl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
    <div className=' d-flex v-stack gap-5'>
    <img src={Name} className=' name'/>
  <p className='h3'>Lastaname</p>

    </div>


</div>
</div>





<div className='row mt-5 '>
<div className='col-xl-6 col-xxl-6 col-lg-6 col-md-12 col-sm-12  col-xs-12 '>
    <div className=' d-flex v-stack gap-5'>
    <img src={Phone} className=' name'/>
  <p className='h3'>Mobile</p>

    </div>


</div>

<div className='col-xl-6 col-xxl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
    <div className=' d-flex v-stack gap-5'>
    <img src={Address} className=' name'/>
  <p className='h3'>Address</p>

    </div>


</div>
</div>









<div className='row mt-5'>
<div className='col-xl-6 col-xxl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
    <div className=' d-flex v-stack gap-5'>
    <img src={Email} className=' name'/>
  <p className='h3'>Email</p>

    </div>


</div>

<div className='col-xl-6col-xxl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
    <div className=' d-flex v-stack gap-5'>
    <img src={DOB} className=' name'/>
  <p className='h3'>D.O.B</p>

    </div>


</div>
</div>







</div>
   </div>
 
    </>
  )
}
