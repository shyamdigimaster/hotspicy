import React from "react";
import Home from "../Home";
import Card from "../Component/Cards";
import Product from "../Component/Product";
import Alldeal from "../Component/Alldeal";
import Coffee from "../Component/Coffee";
import Trendingproduct from "../Component/Trendingproduct";
import Clock from "../Component/Clock";
import Footer from "../Component/Footer";
import Carouselo from "../Component/Carouselo";
import Form from "../Component/Form";
export default function Main(){
    return(
        
         <div>
      
           < Home />
           <Carouselo/>
<Card />
<Product />
<Alldeal />
<Coffee />
<Alldeal />

<Trendingproduct />

<Clock />
<Footer />
{/* <Form/> */}
        </div>
    
       



    )
}