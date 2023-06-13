
import React, { useEffect, useState } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ClockLoader from 'react-spinners/ClockLoader';
import Milkcho from './Product/Milkcho';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './Product/Main';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    Aos.init({
      disable: false,
    });
  }, []);

  return (
    <>

    <div className="app">
    
        {loading ? (
          
          <div className='clock'>
             <ClockLoader 
          color={'rgb(73 45 32)'} loading={loading} size={100} 
          />
            </div>
         
         
        ) : (
          <>

<BrowserRouter >
<Routes>
  <Route path='/' element={<Main />} />
  <Route path='/milkcho' element={<Milkcho />} />
</Routes>
</BrowserRouter>



          
          </>
        )}
      </div>
  
  
    </>
  );
}

export default App;
