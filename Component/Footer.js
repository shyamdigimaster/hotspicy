// import React from 'react'
// import logo from '../Image/coffee-logo-design-creative-idea-logo-elements-2.png';
// import './Product.css';
// import { useState } from 'react';
// import Facebook from '../Image/facebook.svg'
// import youtube from '../Image/youtube.svg';
// import WhatsApp from '../Image/whatsapp.svg';
// import Arrow from '../Image/arrow-up.svg'
// export default function Footer() {
//   const [visible, setVisible] = useState(false)



  
//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop;
//     if (scrolled > 300){
//       setVisible(true)
//     } 
//     else if (scrolled <= 300){
//       setVisible(false)
//     }
//   };
//   const handleclick =()=>{
//   window.scrollTo({
//     top: 0, 
//     behavior: 'smooth'
    
//   });
// };

// window.addEventListener('scroll', toggleVisible);
//   }

//   return (
 
//   <>
// <footer>

//   <div className='container'>

//     <div className='row'>
//       <hr/>
//       <div className='col-xl-5 col-xxl-5 col-md-5 col-sm-5 col-xs-5 col-lg-5'>
//       <a href="/#" class="d-flex text-center  text-dark">
//         <img alt="logo" src={logo} className=' logo ' />
//         <span class="mt-3   font-weight-bold">“Have a brewtiful day!”</span>
//       </a>
//       </div>

//       <div className='col-xl-5 col-xxl-5 col-md-5 col-sm-5 col-xs-5 col-lg-5'>
//       <button class="btn  btn-flat p-2">
//           <img src={Facebook} className='text-white '/>
//         </button>
//         <button class="btn btn-flat p-2">
//         <img src={youtube} className='text-white '/>
//         </button>
//         <button class="btn btn-flat p-2">
//         <img src={WhatsApp} className='text-white '/>
//         </button>
//       </div>


//       <div className='col-xl-2 col-xxl-2 col-md-2 col-sm-2 col-xs-2 col-lg-2'>
//       <button class="px-2 mx-3 stylearrow" onClick={handleclick()}>
//         <img src={Arrow} className='Arrow' id="Arrow" />
//         </button>
//       </div>

//     </div>
//   </div>

// </footer>
//   </>
//   )
// }



import React from 'react';
import logo from '../Image/coffee-logo-design-creative-idea-logo-elements-2.png';
import './Product.css';
import { useState } from 'react';
import Facebook from '../Image/facebook.svg';
import youtube from '../Image/youtube.svg';
import WhatsApp from '../Image/whatsapp.svg';
import Arrow from '../Image/arrow-up.svg';

export default function Footer() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const handleclick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <footer>
        <div className='container'>
          <div className='row'>
            <hr />
            <div className='col-xl-5 col-xxl-5 col-md-5 col-sm-5 col-xs-5 col-lg-5'>
              <a href="/#" class="d-flex text-center text-dark">
                <img alt="logo" src={logo} className=' logo ' />
                <span class="mt-3 font-weight-bold">“Have a brewtiful day!”</span>
              </a>
            </div>
            <div className='col-xl-5 col-xxl-5 col-md-5 col-sm-5 col-xs-5 col-lg-5'>
              <button class="btn btn-flat p-2">
                <img src={Facebook} className='text-white ' />
              </button>
              <button class="btn btn-flat p-2">
                <img src={youtube} className='text-white ' />
              </button>
              <button class="btn btn-flat p-2">
                <img src={WhatsApp} className='text-white ' />
              </button>
            </div>
            <div className='col-xl-2 col-xxl-2 col-md-2 col-sm-2 col-xs-2 col-lg-2'>
              <button class="px-2 mx-3 stylearrow" onClick={handleclick}
              style={{display: visible ? 'inline' : 'none'}} >
                <img src={Arrow} className='Arrow' id="Arrow" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
