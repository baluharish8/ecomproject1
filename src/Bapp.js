
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Mobiles from "./mobiles";
import Footer from "./footer";
import Header from "./header";
import Login from "./login";
import { HashRouter } from "react-router-dom";

import { useEffect, useState } from "react";

function Bapp(){

    const [showroute,setShowRoute]=useState(false)

function showRouteToggle(){
setShowRoute(!showroute)
// console.log(e)
}


// const basename = document.querySelector('base')?.getAttribute('href') ?? '/' 


    return(
        <>
        {/* <BrowserRouter basename={process.env.PUBLIC_URL} > */}
        {/* <BrowserRouter > */}
<HashRouter>

        <Header showRouteToggle={showRouteToggle} ></Header>
                <Routes>
                {/* <Route path='/login' element={<Login showRouteToggle={showRouteToggle} ></Login> } /> */}
                 <Route exact path='/mobiles' element={<Mobiles></Mobiles> } />

                   {!showroute&&  <Route path='/' element={<App  />} />}

                </Routes>
          {!showroute&&  <Footer></Footer>}

          </HashRouter>
            {/* </BrowserRouter > */}
        </>
    )
}

export default Bapp