import React from 'react'
import Milkychocolate from '../Image/milk-choc-modak-complimentary-box.jpeg';
import bell from '../Image/bell1.jpg'
import chocolate from '../Image/ch3.jpg'
import chocolate1 from '../Image/ch2.webp'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './Product.css';
export default function Product() {
    return (
        <>
            <div className='container  '>
                <div className='row mt-3 ' >
                    <h4 className="PopularProduct" id="PopularProduct">Popular Products</h4>
                    <hr />
          

              
                    <div className='col-xl-3 col-xxl-3 col-lg-3 col-md-12 col-xs-12 col-sm-12 col-xs-12' >
                        <div className='chocolateproduct'>
                        <div class="card w-100 border-0">
                            <img className="card-img-top w-50 h-75 Imagechocolate img-fluid " src={Milkychocolate} alt="Card image cap" />
                            <div class="card-body">
                                <div className='title'>
                                    <h5>Milk chocolate Modak</h5>

                                    <h5> in complimentary boxes</h5>
                                </div>


                                <Stack spacing={2}>
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>

                                <div className='row'>
                                    <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-6 col-xs-6 col-md-6'>
                                        <span className='number'>₹500.00</span>
                                    </div>
                                    <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-6 col-xs-6 col-md-6'>
                                        <del className='text-muted'>₹1,000.00</del>
                                    </div>
                                </div>
                                <br />
                                <a href="/milkcho" className='Addtocard'>Add to card</a>
                            </div>
                        </div>
                        </div>
                    </div>

            

                    <div className='col-xl-3 col-xxl-3 col-lg-3 col-md-12 col-xs-12 col-sm-12 col-xs-12'>
                    <div className='chocolateproduct'>
                        <div class="card w-100 border-0">
                            <img className="card-img-top w-50 h-75 Imagechocolate img-fluid" src={bell} alt="Card image cap" />
                            <div class="card-body">

                                <h5 className='title'>Chocolate Bell</h5>


                                <Stack spacing={2}>
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>

                                <div className='row'>
                                    <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-6 col-xs-6 col-md-6'>
                                        <span className='number'>₹500.00</span>
                                    </div>
                                    <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-6 col-xs-6 col-md-6'>
                                        <del className='text-muted'>₹1,000.00</del>
                                    </div>
                                </div>

                                <br />
                                <a href="#" className='Addtocard'>Add to card</a>
                            </div>
                        </div>
</div>
                    </div>





                    <div className='col-xl-3 col-xxl-3 col-lg-3 col-md-12 col-xs-12 col-sm-12 col-xs-12'>
                    <div className='chocolateproduct'>
                        <div class="card w-100 border-0">
                            <img className="card-img-top w-50 h-75 Imagechocolate img-fluid" src={chocolate} alt="Card image cap" />
                            <div class="card-body">
                                <div className='title'>

                                    <h5> JOIE ROASTED ALMOND </h5>

                                    <h5>  (PACK OF 20)</h5>
                                </div>

                                <Stack spacing={2}>
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
                                <div className='row'>
                                    <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-6 col-xs-6 col-md-6'>
                                        <span className='number'>₹500.00</span>
                                    </div>
                                    <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-6 col-xs-6 col-md-6'>
                                        <del className='text-muted'>₹1,000.00</del>
                                    </div>
                                </div>

                                <br />
                                <a href="#" className='Addtocard'>Add to card</a>
                            </div>
                        </div>
</div>
                    </div>





                    <div className='col-xl-3 col-xxl-3 col-lg-3 col-md-12 col-xs-12 col-sm-12 col-xs-12'>
                    <div className='chocolateproduct'>
                        <div class="card w-100 border-0">
                            <img className="card-img-top w-50 h-75 Imagechocolate img-fluid" src={chocolate1} alt="Card image cap" />
                            <div class="card-body">
                                <div className='title '>
                                    <h5>  JOIE CENTRE FILLED </h5>

                                    <h5> COFFEE BITES</h5>
                                </div>


                                <Stack spacing={2}>
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>

                                <div className='row'>
                                    <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-6 col-xs-6 col-md-6'>
                                        <span className='number'>₹500.00</span>
                                    </div>
                                    <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-6 col-xs-6 col-md-6'>
                                        <del className='text-muted'>₹1,000.00</del>
                                    </div>
                                </div>
                                <br />
                                <a href="#" className='Addtocard'>Add to card</a>
                            </div>
                        </div>
</div>
                    </div>
                    
                </div>

               


            </div>

        </>
    )
}
