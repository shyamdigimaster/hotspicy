import React from 'react'
import './Product.css'
export default function Alldeal() {
    return (
        <>
            <div className='container'>
                <div className='row '>
                    <div className='col'>
                        <h4 className='deal' id="deal;">All Deals</h4>
                        <hr />
                        <p className='display-6 text-center offer'>HurryUp 50% offer End in Today</p>
                        <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="card-wrapper container-sm d-flex  justify-content-around">
                                        <div class="card  w-50">
                                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top Imagechocolate" alt="..." />
                                            <div class="card-body">
                                                <br />
                                                <a href="#" className='Addtocard'>Add to card</a>

                                            </div>
                                        </div><div class="card w-50" >
                                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top Imagechocolate" alt="..." />
                                            <div class="card-body">
                                                <br />
                                                <a href="#" className='Addtocard'>Add to card</a>

                                            </div>
                                        </div>
                                        <div class="card w-50">
                                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top Imagechocolate" alt="..." />
                                            <div class="card-body">
                                                <br />
                                                <a href="#" className='Addtocard'>Add to card</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card-wrapper container-sm d-flex   justify-content-around">
                                        <div class="card  w-50">
                                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top Imagechocolate" alt="..." />
                                            <div class="card-body">
                                                <br />
                                                <a href="#" className='Addtocard'>Add to card</a>

                                            </div>
                                        </div><div class="card w-50" >
                                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top Imagechocolate" alt="..." />
                                            <div class="card-body">
                                                <br />
                                                <a href="#" className='Addtocard'>Add to card</a>

                                            </div>
                                        </div>
                                        <div class="card w-50" >
                                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top Imagechocolate" alt="..." />
                                            <div class="card-body">
                                                <br />
                                                <a href="#" className='Addtocard'>Add to card</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card-wrapper container-sm d-flex  justify-content-around">
                                        <div class="card w-50">
                                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top Imagechocolate" alt="..." />
                                            <div class="card-body">
                                                <br />
                                                <a href="#" className='Addtocard'>Add to card</a>
                                            </div>
                                        </div>
                                        <div class="card w-50" >
                                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top Imagechocolate" alt="..." />
                                            <div class="card-body">
                                                <br />
                                                <a href="#" className='Addtocard'>Add to card</a>

                                            </div>
                                        </div>
                                        <div class="card w-50">
                                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top Imagechocolate" alt="..." />
                                            <div class="card-body">
                                                <br />
                                                <a href="#" className='Addtocard '>Add to card</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                    </div>


        </div>
                <br />
                <hr className='mt-4' />

            </div>
        </>


    )
}
