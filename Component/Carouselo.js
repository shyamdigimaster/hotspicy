import React from 'react';
import Image1 from "../Image/pexels-photo-1132586.webp";
import Image2 from "../Image/pexels-photo-1695052.jpeg";
import Image3 from "../Image/pexels-photo-3491211.webp";
import '../App.css';

export default function Carouselo() {
  return (
   <>

<div className='navbar'>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Image1} class="Imageall" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <div className='text-end gap-5 '>
        <p className='display-2 text-uppercase'>The Daily Drip....</p>
        <p>"You're only one sip away form good mood"</p>
        <button className='Sip text-center p-1'>Sip</button>
        </div>
       
      </div>
    </div>
    <div class="carousel-item">
      <img src={Image2} class="Imageall" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div className='text-end gap-5'>
        <p className='display-2 text-uppercase'>Top Pot</p>
        <p>"You mocha me happy"</p>
        <button className='Sip text-center p-1'>Mocha</button>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Image3} class="Imageall" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div className='text-end gap-5'>
        <p className='display-2 text-uppercase'>Sunset cafe</p>
        <p>"Follow your heart ,but take coffee with you"</p>
        <button className='Sip text-center p-1'>coffee</button>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

   </>
  )
}
