import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { forwardRef, useImperativeHandle } from "react"
import Login from "./login";
import './headerb4-grid.css';
function Header(p) {
    // console.log(p)
    const navigate = useNavigate();
    let [showlogincomp, setShowLoginComp] = useState()
    let button = useRef()
    const [showuserpro, setShowUserPro] = useState(false)
    // const [userinfo, setUserInfo] = useState('')
    // const assignvalue=()=>{setUserInfo(userData)}
    const [search, setSearch] = useState('')


    useEffect(() => {
        if (p.trigger) {
            showUserProFun()

        }
    }, [p.trigger]);
    useEffect(() => {
        if (p.trigger2) {
            showUserProFun2()

        }
    }, [p.trigger2]);
    function logoutFun(){
        p.setUserData('')
        showUserProFun()
        navigate('/');

    }
    function showUserProFun() {
        setShowUserPro(false)
        navigate('/')
    }
    function showUserProFun2() {
        setShowUserPro(true)
        
    }

    function showLoginCompToggle() {
        setShowLoginComp(!showlogincomp)
    }

    // useEffect(()=>{console.log(userData)},[userData])

    function itemSearch() {
        if (search.trim() === '') {
            setSearch('')
        } else {
            // window.open('https://www.google.co.in/search?q='+search.trim());
            window.location.href = 'https://www.google.co.in/search?q=' + search.trim()
            setSearch('')
        }

    }
    return (
        <>
            {/* <Login></Login> */}
            {/* {showlogincomp && <Login storingDataFun={p.storingDataFun} setUserInfo={setUserInfo} setUserData={p.setUserData} showRouteToggle={p.showRouteToggle} showLoginCompToggle={showLoginCompToggle} setShowUserPro={setShowUserPro} getFun={p.getFun} storeddata={p.storeddata} ></Login>} */}
            { <div className="bg-dark mb-1 boxshadow headerone">
                <div className="container-fluid row ">
                    <div className="col-8 col-md-3 col-lg-3  d-flex justify-content-start">
                        <div className=" text-white me-4 mt-2 mediaquery2 ">
                            <Link to='/' className="mt-2"><img src="images/logo.png" id="eshoppingIcon" alt="" /><label
                                className="headerone__logomain__logodiv__label text-white mt-2 cursorPointer" htmlFor="eshoppingIcon">-Shopping</label>
                            </Link>
                        </div>

                        <div className=" headerone__logomain__icondiv  header_icons">
                            <Link className="headerone__logomain__icondiv__icon "><i
                                className="fa-solid fa-location-dot" id="location"></i></Link><br />
                            <label className="headerone__logomain__icondiv__label cursorPointer" htmlFor="location">Enter location</label>
                        </div>
                    </div>
                    <div className="col-12 order-12 order-md-1 col-md-7 col-lg-6 headerone__logomain__icondiv d-flex align-items-center  ">
                        <form className="d-flex justify-content-center w-100  ">

                            <input onChange={(e) => { setSearch(e.target.value) }} value={search} className="form-control me-1 headerone__formdiv__form__input  " type="search" id="src"
                                placeholder="Search items" aria-label="Search" />
                            <button ref={button} onClick={(e) => { itemSearch(); e.preventDefault() }} className="btn btn-outline-success text-white bgcolor" id="sbt" type="submit">Search</button>

                        </form>
                    </div>
                    <div className="col-4 order-1 order-md-12 col-md-2 col-lg-3 d-flex justify-content-end">
                        <div className=" pe-5 mediaquery3 headerone__logomain__icondiv header_icons ">
                            <a href="https://www.amazon.in/gp/browse.html?node=3704982031&ref_=nav_em_sbc_gc_all_0_2_19_2" className="headerone__logomain__icondiv__icon" id="giftcard" ><i
                                className="fa-sharp fa-solid fa-hand-holding-heart "></i></a><br />
                            <label className="headerone__logomain__icondiv__label cursorPointer " htmlFor="giftcard">Gift card</label>
                        </div>
                        <div className=" pe-5 mediaquery3 headerone__logomain__icondiv header_icons">
                            <Link className=" headerone__logomain__icondiv__icon" id="helpline"><i
                                className="fa-solid fa-phone-flip"></i> <br />
                                <label className="headerone__logomain__icondiv__label cursorPointer" htmlFor="helpline">Help Line</label> </Link>
                        </div>

                        <div className=" pe-5  mediaquery3 headerone__logomain__icondiv list1 ">
                            {!showuserpro && <Link to="/login" onClick={() => { p.showRouteToggle() }} className="headerone__logomain__icondiv__icon" id="signin" ><i
                                className="fas fa-user-circle   iconhover"></i>
                                <br />
                                <label htmlFor="signin" className="headerone__logomain__icondiv__label cursorPointer ">Signin</label>
                            </Link>
                            }
                            {showuserpro && <>
                                <div className="">
                                    {/* showUserProToggle() calling Sign in button   */}
                                    <Link to="/edit" onClick={() => { }} className="headerone__logomain__icondiv__icon" id="login" ><i
                                        className="fas fa-user-circle   iconhover"></i>
                                        <br></br>
                                        <label htmlFor="login" className="headerone__logomain__icondiv__label cursorPointer pb-0 " > <p className="usernamewrapper"> {p.userinfo} <br></br> Profile</p> </label>
                                    </Link>
                                </div>
                                <div className="seemore__hide profilehover__maindiv ">
                                    <div className="profilehover ">
                                        <button type="button" className="btn btn-light border rounded  w-100 profilehover__btn p-0  " onClick={() => {navigate('/edit') }} >EditProfile</button>
    
                                        <button type="button" className="btn btn-light border rounded  w-100 profilehover__btn p-0" onClick={() => {logoutFun() }} >Logout</button>

                                    </div>

                                </div>
                            </>
                            }

                        </div>
                        <div className=" ps-3  headerone__logomain__icondiv">
                            <Link className=" headerone__logomain__icondiv__icon" id="cart"><i className="fas fa-shopping-cart"></i>
                                <br />
                                <label className="headerone__logomain__icondiv__label cursorPointer " htmlFor="cart">Cart</label>
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