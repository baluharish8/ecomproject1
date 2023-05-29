
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
// import { useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router';

function App() {

    let [show, setShow] = useState(false)

    function nxtbtn() {
        setShow(!show)

    }

    function prebtn() {
        setShow(!show)
    }

    return (
        <>
            <div className="mainbody " >
                {/* MULTI CAROUSEL */}
                <Carousel></Carousel>
                {/* SLIDER ME */}
                {/* SLIDER ME*/}

                <div className="d-flex row container-fluid justify-content-center bg-white pt-2 pb-2 boxshadow navbarlargeone">
                    <div className="d-flex justify-content-around  col-12 col-sm-6 col-md-4  pare ">
                        <li className="sss center   ">
                            <a className="ss text-white navfs " href="#"> <img src="images/linkfashion.jpg" className="border" alt="" />
                                <br />
                                Fashion</a>
                        </li>
                        <li className="sss center list1  ">
                            <Link to="/mobiles" className="ss text-white navfs  " href="#"> <img src="images/linkmobile2.jpg" className="border "
                                alt="" /></Link>
                            {/* pare list1 sss seemore__hide mobiledpdn2*/}
                            <div className="seemore__hide mobiledpdn2  ">
                                <a href="" className="dpdn__anchor "> Oneplus </a><br />
                                <a href="" className="dpdn__anchor "> Oppo </a><br />
                                <a href="" className="dpdn__anchor "> Redmi </a><br />
                                <a href="" className="dpdn__anchor"> iqoo </a><br />
                                <a href="" className="dpdn__anchor"> Apple </a><br />
                                <a href="" className="dpdn__anchor"> Xiaomi </a>
                            </div>
                            <div className="d-flex align-items-center">
                                <button id="mobilesbtn" className="list1__dpdn "> <Link to="/mobiles" href=""
                                    className="ss text-white navfs ">Mobiles</Link> </button>

                                <i className="fa-solid fa-angle-down seemore__show icon__size " id="down-arr-mobiles"></i>
                                <i className="fa-solid fa-angle-up seemore__hide  icon__size" id="up-arr-mobiles"></i>
                            </div>
                        </li>

                        <li className="sss center   ">
                            <a className="ss text-white navfs " href="#"> <img src="images/linkelectronic.jpg" className="border" alt="" />
                                <br />
                                Electronics</a>
                        </li>

                    </div>
                    <div className="d-flex justify-content-around  col-12 col-sm-6 col-md-4">
                        <li className="sss center  ">
                            <a className="ss text-white navfs " href="#"> <img src="images/linkappliances.jpg" className="border" alt="" />
                                <br />
                                Appliances</a>
                        </li>
                        <li className="sss center   ">
                            <a className="ss text-white navfs " href="#"> <img src="images/linkhome.jpg" className="border" alt="" />
                                <br />
                                Furniture</a>
                        </li>
                        <li className="sss text-center   ">
                            {/* <a className="ss text-white navfs " href="#"> <img src="images/linksports.jpg" className="border ms-2" alt="" /> <br></br>
                                            <span>
                                            Sports&Fitness
                                            </span>
                                            </a> */}
                            <img src="images/linksports.jpg" className="border " alt="" /> <br></br>
                            <span className="text-white navfs">
                                Sports&Fitness
                            </span>
                        </li>

                    </div>
                    <div className="d-flex justify-content-around col-12 col-sm-6 col-md-4">
                        <li className="sss center  ">
                            <a className="ss text-white navfs " href="#"> <img src="images/linkkitchen.jpg" className="border" alt="" />
                                <br />
                                Kitchen </a>
                        </li>
                        <li className="sss center   ">
                            <a className="ss text-white navfs " href="#"> <img src="images/linktoy.jpg" className="border" alt="" />
                                <br />
                                Kid Toys</a>
                        </li>
                        <li className="sss center   ">
                            <a className="ss text-white navfs " href="#"> <img src="images/linkfootware.jpg" className="border" alt="" />
                                <br />
                                Footware</a>
                        </li>

                    </div>
                </div>

                {/* <div className=" pt-2 pb-2" id="one">
                    <div className="posirela" >
                        {!show && <div className="hideslid">
                            <div className="d-flex row container-fluid justify-content-center">
                                <div className="d-flex justify-content-around  col-12 col-sm-6 col-md-4 ">
                                    <li className="sss center  ">
                                        <Link  className=" text-white navfs " > <img src="images/disc1.jpg" className="border" alt="" /> <br />
                                            Electronicsss</Link>
                                    </li>
                                    <li className="sss center   ">
                                        <Link className="ss text-white navfs " href="#"> <img src="images/mbl3.png" className="border" alt="" /> <br />
                                            Fashion</Link>
                                    </li>
                                    <li className="sss center   ">
                                        <Link to="/mobiles" className="ss text-white navfs " href="mobiles.html"> <img src="images/disc2.jpg" className="border" alt="" /> <br />
                                            Mobiles</Link>
                                    </li>

                                </div>
                                <div className="d-flex justify-content-around  col-12 col-sm-6 col-md-4">
                                    <li className="sss center  ">
                                        <Link className=" text-white navfs " href="#"> <img src="images/disc1.jpg" className="border" alt="" /> <br />
                                            Electronics</Link>
                                    </li>
                                    <li className="sss center   ">
                                        <Link className=" text-white navfs " href="#"> <img src="images/mbl3.png" className="border" alt="" /> <br />
                                            Fashion</Link>
                                    </li>
                                    <li className="sss center   ">
                                        <Link className="text-white navfs " href="#"> <img src="images/disc2.jpg" className="border" alt="" /> <br />
                                            Electronics</Link>
                                    </li>

                                </div>
                                <div className="d-flex justify-content-around col-12 col-sm-6 col-md-4">
                                    <li className="sss center  ">
                                        <Link className=" text-white navfs " href="#"> <img src="images/disc4.jpg" className="border" alt="" /> <br />
                                            Electronics</Link>
                                    </li>
                                    <li className="sss center   ">
                                        <Link className=" text-white navfs " href="#"> <img src="images/disc5.jpg" className="border" alt="" /> <br />
                                            Electronics</Link>
                                    </li>
                                    <li className="sss center   ">
                                        <Link className=" text-white navfs " href="#"> <img src="images/disc1.jpg" className="border" alt="" /> <br />
                                            Electronics</Link>
                                    </li>

                                </div>
                            </div>
                        </div>
                        }
                        {show && <div className="hideslid">

                            <div className="d-flex container-fluid ms-3 ">
                                <li className="sss center   col">
                                    <Link  className="ss text-white navfs " href="#"> <img src="images/disc2.jpg" className="border" alt="" /> <br />
                                        Electronics</Link>
                                </li>
                                <li className="sss center   col">
                                    <Link className="ss text-white navfs " href="#"> <img src="images/mbl3.png" className="border" alt="" /> <br />
                                        Fashion</Link>
                                </li>
                                <li className="sss center   col">
                                    <Link className="ss text-white navfs " href="#"> <img src="images/disc2.jpg" className="border" alt="" /> <br />
                                        Electronics</Link>
                                </li>
                                <li className="sss center   col">
                                    <Link className="ss text-white navfs " href="#"> <img src="images/disc3.jpg" className="border" alt="" /> <br />
                                        Electronics</Link>
                                </li>
                                <li className="sss center   col">
                                    <Link className="ss text-white navfs " href="#"> <img src="images/disc4.jpg" className="border" alt="" /> <br />
                                        Electronics</Link>
                                </li>
                            </div>

                        </div>
                        }
                        <div className="posiabs d-flex justify-content-center w-100">
                            <div className="btdiv d-flex justify-content-between mediaquery">
                                <button onClick={prebtn} id="pbut" className="btnbor"> <i className="fa-solid fa-angle-left"></i> </button>

                                <button onClick={nxtbtn} id="nbut" className="btnbor"> <i className="fa-solid fa-angle-right"></i> </button>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* MAIN COROUSAL */}

                <div>

                    {/* To turn off Auto corousal Replace data-bs-ride="carousel" with data-bs-interval="false"  */}

                    <div id="carouselExampleControls" className="carousel slide p-2 boxshadow " data-bs-ride="carousel" data-bs-interval="1000">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/ff - Copy.jpg" className="d-block w-100 corousal__image" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="images/redsale - Copy.jpg" className="d-block w-100 corousal__image " alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="images/bluesale - Copy.jpg" className="d-block w-100 corousal__image" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>

                <div className="container-fluid mt-5">
                    <div>
                        <h4 className="mb-4">Deals of the day</h4>
                    </div>
                    <div className="d-flex justify-content-around headcart row">
                        <div className="cart col col-md-4 col-lg-2">
                            <Link href=""><img src="images/cart1mbl.jpg" alt="" className="cart__image" /></Link>
                            <p className="cart__p1">Mobile phones</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$250</span>
                                    <span className="cart__anchor__span2">$3999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 95% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <Link href=""><img src="images/cart3ear.jpg" alt="" className="cart__image" /></Link>
                            <p className="cart__p1">Wire less headphone</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$259</span>
                                    <span className="cart__anchor__span2">$2539 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 81% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <Link href=""><img src="images/cart4shoe.jpg" alt="" className="cart__image" /></Link>
                            <p className="cart__p1">Branded Shoes</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$99</span>
                                    <span className="cart__anchor__span2">$999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 75% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <Link href=""><img src="images/cart8mbl.jpg" alt="" className="cart__image" /></Link>
                            <p className="cart__p1">Mobile stick</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$199</span>
                                    <span className="cart__anchor__span2">$2999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 93% off</span>
                                </p>
                            </Link>
                        </div>

                        <div className="cart col col-md-4 col-lg-2">
                            <Link href=""><img src="images/cart7mbl.jpg" alt="" className="cart__image" /></Link>
                            <p className="cart__p1">Honor mobiles</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$399</span>
                                    <span className="cart__anchor__span2">$4999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 70% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <Link href=""><img src="images/cart2mbl.jpg" alt="" className="cart__image" /></Link>
                            <p className="cart__p1">Folded Phones</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$199</span>
                                    <span className="cart__anchor__span2">$2999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 93% off</span>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="container-fluid mt-5">
                    <div className="mb-4">
                        <h4>Deals of the day</h4>
                    </div>
                    <div className="d-flex justify-content-around headcart row">
                        <div className="cart col col-md-4 col-lg-2">
                            <Link href=""><img src="images/row2cart1.jpg" alt="" className="cart__image2" /></Link>
                            <p className="cart__p1">Mobile stand</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$99</span>
                                    <span className="cart__anchor__span2">$999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 53% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <Link href=""><img src="images/row2cart5.jpg" alt="" className="cart__image2" /></Link>
                            <p className="cart__p1">Womens fashion</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$199</span>
                                    <span className="cart__anchor__span2">$2999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 93% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <Link href=""><img src="images/row2cart3.jpg" alt="" className="cart__image2" /></Link>
                            <p className="cart__p1">Branded watch</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$299</span>
                                    <span className="cart__anchor__span2">$3999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 95% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <Link href=""><img src="images/row2cart4.jpg" alt="" className="cart__image2" /></Link>
                            <p className="cart__p1">Mens fashion</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$299</span>
                                    <span className="cart__anchor__span2">$2999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 96% off</span>
                                </p>
                            </Link>
                        </div>

                        <div className="cart col col-md-4 col-lg-2">
                            <Link href=""><img src="images/row2cart2.jpg" alt="" className="cart__image2" /></Link>
                            <p className="cart__p1">Mobile gimbal</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$99</span>
                                    <span className="cart__anchor__span2">$199 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 83% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <Link href=""><img src="images/row2cart6.jpg" alt="" className="cart__image2" /></Link>
                            <p className="cart__p1">Lorem ipsum</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$199</span>
                                    <span className="cart__anchor__span2">$2999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 93% off</span>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </>

    )



}

export default App