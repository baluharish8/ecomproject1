import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Login from "./login";
import './headerb4-grid.css';
function Header(p) {
    // console.log(p)
    let [showlogincomp, setShowLoginComp] = useState()
    let button = useRef()
    const [showuserpro, setShowUserPro] = useState(false)
    const [userinfo, setUserInfo] = useState('')
    const [search, setSearch] = useState('')
    function showUserProToggle() {
        setShowUserPro(!showuserpro)
    }
    function showLoginCompToggle() {
        setShowLoginComp(!showlogincomp)
    }

    function itemSearch() {
        if (search.trim() === '') {
            setSearch('')
        } else {
            // window.open('https://www.google.co.in/search?q='+search.trim());
            window.location.href = 'https://www.google.co.in/search?q=' + search.trim()
            setSearch('')
        }

    }
    // p.setPropValue(showUserProToggle)
    return (
        <>
            {/* <Login></Login> */}
            {showlogincomp && <Login setUserInfo={setUserInfo} showRouteToggle={p.showRouteToggle} showLoginCompToggle={showLoginCompToggle} showUserProToggle={showUserProToggle} ></Login>}
            {!showlogincomp && <div className="bg-dark mb-1 boxshadow">
                <div className="container-fluid row ">
                    <div className="col-8  col-lg-3  d-flex justify-content-start">
                        <div className=" text-white me-4 mediaquery2 ">
                            <Link to='/about' className="mt-2"><img src="images/logo.png" alt="" /></Link><label
                                className="headerone__logomain__logodiv__label mt-2">-Shopping</label>
                        </div>
                        <div className=" headerone__logomain__icondiv header_icons">
                            <Link className="headerone__logomain__icondiv__icon "><i
                                className="fa-solid fa-location-dot"></i></Link><br />
                            <label className="headerone__logomain__icondiv__label">Enter location</label>
                        </div>
                    </div>
                    <div className="col-12 order-12 order-lg-1 col-lg-6 headerone__logomain__icondiv d-flex align-items-center  ">
                        <form className="d-flex justify-content-center w-100  ">

                            <input onChange={(e) => { setSearch(e.target.value) }} value={search} className="form-control me-1 headerone__formdiv__form__input  " type="search" id="src"
                                placeholder="Search items" aria-label="Search" />
                            <button ref={button} onClick={(e) => { itemSearch(); e.preventDefault() }} className="btn btn-outline-success text-white bgcolor" id="sbt" type="submit">Search</button>

                        </form>
                    </div>
                    <div className="col-4 order-1 order-lg-12 col-lg-3 d-flex justify-content-end">
                        <div className=" pe-5 mediaquery3 headerone__logomain__icondiv header_icons">
                            <a href="https://www.amazon.in/gp/browse.html?node=3704982031&ref_=nav_em_sbc_gc_all_0_2_19_2" className="headerone__logomain__icondiv__icon"><i
                                className="fa-sharp fa-solid fa-hand-holding-heart "></i></a><br />
                            <label className="headerone__logomain__icondiv__label">Gift card</label>
                        </div>
                        <div className="pe-5 mediaquery3 headerone__logomain__icondiv header_icons">
                            <Link className=" headerone__logomain__icondiv__icon"><i
                                className="fa-solid fa-phone-flip"></i> <br />
                                <label className="headerone__logomain__icondiv__label">Help Line</label> </Link>
                        </div>
                        <div className=" pe-5 mediaquery3 headerone__logomain__icondiv">
                            {!showuserpro && <Link onClick={() => { p.showRouteToggle(); showLoginCompToggle() }} className="headerone__logomain__icondiv__icon" id="login" ><i
                                className="fas fa-user-circle   iconhover"></i>
                                <br />
                                <label className="headerone__logomain__icondiv__label">Signin</label>
                            </Link>
                            }
                            {showuserpro &&
                                <Link to="/" onClick={() => { showUserProToggle() }} className="headerone__logomain__icondiv__icon" id="login" ><i
                                    className="fas fa-user-circle   iconhover"></i>
                                    <br />
                                    <label htmlFor="login" className="headerone__logomain__icondiv__label">{userinfo} <br />SignOut</label>
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