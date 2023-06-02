
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Mobiles from "./mobiles";
import Footer from "./footer";
import Header from "./header";
import Login from "./login";
import { HashRouter } from "react-router-dom";

import { useEffect, useState } from "react";

function App(){

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

                   {!showroute&&  <Route path='/' element={<Home  />} />}

                </Routes>
          {!showroute&&  <Footer></Footer>}

          </HashRouter>
            {/* </BrowserRouter > */}
        </>
    )
}

export default App