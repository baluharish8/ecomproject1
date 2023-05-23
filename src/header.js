import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Login from "./login";

function Header(p){
    // console.log(p)
   let [showlogincomp,setShowLoginComp]=useState()
    let button = useRef()
    const [showuserpro,setShowUserPro]=useState(false)
    const [userinfo,setUserInfo]=useState('')
    function showUserProToggle(){
        setShowUserPro(!showuserpro)
    }
    function showLoginCompToggle(){
        setShowLoginComp(!showlogincomp)
    }
// p.setPropValue(showUserProToggle)
    return(
<>
{/* <Login></Login> */}
{showlogincomp&&<Login setUserInfo={setUserInfo} showRouteToggle={p.showRouteToggle} showLoginCompToggle={showLoginCompToggle} showUserProToggle={showUserProToggle} ></Login>}
{!showlogincomp&& <div className="bg-dark">
                    <div className="container-fluid row ">

                        <div className="col-12 col-md-12 col-lg-3  d-flex justify-content-center">
                            <div className=" text-white me-4 mediaquery2">
                                <Link to='/about' className="mt-2"><img src="images/logo.png" alt="" /></Link><label
                                    className="headerone__logomain__logodiv__label mt-2">-Shopping</label>
                            </div>
                            <div className=" headerone__logomain__icondiv">
                                <Link className="headerone__logomain__icondiv__icon "><i
                                    className="fa-solid fa-location-dot"></i></Link><br />
                                <label className="headerone__logomain__icondiv__label">Enter location</label>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 headerone__logomain__icondiv mt-2">
                            <form className="d-flex justify-content-end me-4">

                                <input className="form-control me-2 headerone__formdiv__form__input  " type="search" id="src"
                                    placeholder="Search items" aria-label="Search" />
                                <button ref={button} className="btn btn-outline-success text-white bgcolor" id="sbt" type="submit">Search</button>

                            </form>
                        </div>
                        <div className="col-12 col-md-12 col-lg-3 d-flex justify-content-end">
                            <div className=" pe-5 mediaquery3 headerone__logomain__icondiv">
                                <Link className="headerone__logomain__icondiv__icon"><i
                                    className="fa-sharp fa-solid fa-hand-holding-heart"></i></Link><br />
                                <label className="headerone__logomain__icondiv__label">Gift card</label>
                            </div>
                            <div className="pe-5 mediaquery3 headerone__logomain__icondiv">
                                <Link className=" headerone__logomain__icondiv__icon"><i
                                    className="fa-solid fa-phone-flip"></i> <br />
                                    <label className="headerone__logomain__icondiv__label">Help Line</label> </Link>
                            </div>
                            <div className=" pe-5 mediaquery3 headerone__logomain__icondiv">
                            {!showuserpro&&    <Link  onClick={()=>{p.showRouteToggle();showLoginCompToggle() }} className="headerone__logomain__icondiv__icon" id="login" ><i
                                    className="fas fa-user-circle   iconhover"></i>
                                    <br />
                                    <label  className="headerone__logomain__icondiv__label">Sign in</label>
                                </Link>
                                }
                            {showuserpro&&   
                             <Link  onClick={()=>{showUserProToggle()}} className="headerone__logomain__icondiv__icon" id="login" ><i
                                    className="fas fa-user-circle   iconhover"></i>
                                    <br />
                                    <label htmlFor="login" className="headerone__logomain__icondiv__label">{userinfo} <br/>SignOut</label>
                                </Link>
                                }

                            </div>
                            <div className=" headerone__logomain__icondiv">
                                <Link className=" headerone__logomain__icondiv__icon"><i className="fas fa-shopping-cart"></i>
                                    <br />
                                    <label className="headerone__logomain__icondiv__label">Cart</label>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
}
</>
    )
}

export default Header