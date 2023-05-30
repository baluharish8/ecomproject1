import { useState } from "react";
import { Link } from "react-router-dom";

import Carousel from "./Carousel";


function Mobiles() {
    let [seemorebtnone, setSeeMoreBtnOne] = useState(false)
    let [seemorebtntwo, setSeeMoreBtnTwo] = useState(false)


    function seemorebtnToggleOne() {
        setSeeMoreBtnOne(!seemorebtnone)
    }
    function seemorebtnToggleTwo() {
        setSeeMoreBtnTwo(!seemorebtntwo)
    }
    return (
        <>
            <div className="mobilebody" >



                {/* <!-- experiment -->
    <!-- slider -->
    <!-- slider --> */}
                <div className="navbgcolor  mobile__menu" id="one">
                    <div>
                        <div className="">
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
                        </div>

                    </div>
                </div>
                <div className="container-fluid row">
                    <div className="col-md-2 mblcolhide">
                        <div className="category mt-4">
                            <h6 className="category__head">
                                Category
                            </h6>
                            <a href="" className="category__anchor">Smartphones & Basic Mobiles</a> <br />
                            <a href="" className="category__anchor">Smartphones</a> <br />
                            <a href="" className="category__anchor">Basic Mobiles</a> <br />
                        </div>
                        <div className="mt-2">
                            <h6 className="category__head">Brand</h6>

                            <input type="checkbox" className="" /> <a href="" className="category__anchor"> Nokia </a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Samsung </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Oneplus </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Oppo </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Redmi </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> iqoo </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Apple </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Xiaomi </a>
                            {seemorebtnone && <div className="seemore__hid" id="moreitems">
                                <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Oneplus </a> <br />
                                <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Oneplus </a><br />
                                <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Oppo </a><br />
                                <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Redmi </a><br />
                                <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> iqoo </a><br />
                                <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Apple </a><br />
                                <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Xiaomi </a>
                            </div>
                            }


                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-angle-down seemore__show " id="down-arrow"></i>
                                <i className="fa-solid fa-angle-up seemore__hide" id="up-arrow"></i>
                                {!seemorebtnone && <button id="seemore" onClick={() => { seemorebtnToggleOne() }} className="seemore__button">See more </button>
                                }
                                {seemorebtnone && <button id="seemore" onClick={() => { seemorebtnToggleOne() }} className="seemore__button">See less </button>
                                }

                            </div>
                        </div>

                        <div className="mt-2">
                            <div>
                                <h6 className="category__head">Price</h6>
                                <a href="" className="category__anchor">$1000-$5000</a> <br />
                                <a href="" className="category__anchor">$5000-$10000</a> <br />
                                <a href="" className="category__anchor">$10000-$15000</a> <br />
                                <a href="" className="category__anchor">$15000-$20000</a> <br />
                                <a href="" className="category__anchor">over $20000</a> <br />
                            </div>
                            <div className="d-flex align-items-center">
                                <input type="number" placeholder="$Min" className="price__input me-1" />
                                <input type="number" placeholder="$Max" className="price__input" />
                                <button className="price__button me-3 ms-1 ">Go</button>
                            </div>
                        </div>

                        <div className="mt-3">
                            <h6 className="category__head">Internal Memory</h6>
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Less than 4 GB </a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 4GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 8GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 16GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 32GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 64GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 128GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 256GB& above </a>
                        </div>


                        <div className="mt-2">
                            <h6 className="category__head">Cellular Phone Operating System</h6>
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Android 10.0</a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Android 11</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Android 12 </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Android 13 </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Android 5.1 </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Android 6.0 </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Android 7.1 </a><br />
                            {seemorebtntwo && <div className="seemore__hid" id="cellular">
                                <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Android 10.0</a> <br />
                                <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Android 11</a><br />
                                <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Android 12 </a><br />
                                <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Android 13 </a><br />
                                <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Android 5.1 </a><br />
                                <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> Android 6.0 </a><br />
                            </div>
                            }

                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-angle-down seemore__show " id="down-arr"></i>
                                <i className="fa-solid fa-angle-up seemore__hide" id="up-arr"></i>
                                {!seemorebtntwo && <button id="cellularbtn" onClick={() => { seemorebtnToggleTwo() }} className="seemore__button"> See more </button>
                                }
                                {seemorebtntwo && <button id="cellularbtn" onClick={() => { seemorebtnToggleTwo() }} className="seemore__button"> See less </button>
                                }
                            </div>
                        </div>


                        <div className="mt-3">
                            <h6 className="category__head">Screen Size</h6>
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Up to 3.9 in </a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 4GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 8GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 16GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 32GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 64GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 128GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 256GB& above </a>
                        </div>


                        <div className="mt-3">
                            <h6 className="category__head">Screen Size</h6>
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Up to 3.9 in </a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 4GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 8GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 16GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 32GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 64GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 128GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 256GB& above </a>
                        </div>


                        <div className="mt-3">
                            <h6 className="category__head">Screen Size</h6>
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Up to 3.9 in </a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 4GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 8GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 16GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 32GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 64GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 128GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 256GB& above </a>
                        </div>


                        <div className="mt-3">
                            <h6 className="category__head">Screen Size</h6>
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Up to 3.9 in </a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 4GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 8GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 16GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 32GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 64GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 128GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 256GB& above </a>
                        </div>


                        <div className="mt-3">
                            <h6 className="category__head">Screen Size</h6>
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Up to 3.9 in </a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 4GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 8GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 16GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 32GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 64GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 128GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 256GB& above </a>
                        </div>



                        <div className="mt-3">
                            <h6 className="category__head">Screen Size</h6>
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Up to 3.9 in </a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 4GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 8GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 16GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 32GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 64GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 128GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 256GB& above </a>
                        </div>



                        <div className="mt-3">
                            <h6 className="category__head">Screen Size</h6>
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Up to 3.9 in </a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 4GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 8GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 16GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 32GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 64GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 128GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 256GB& above </a>
                        </div>




                        <div className="mt-3">
                            <h6 className="category__head">Screen Size</h6>
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Up to 3.9 in </a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 4GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 8GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 16GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 32GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 64GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 128GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 256GB& above </a>
                        </div>


                        <div className="mt-3">
                            <h6 className="category__head">Screen Size</h6>
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Up to 3.9 in </a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 4GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 8GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 16GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 32GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 64GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 128GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 256GB& above </a>
                        </div>




                        <div className="mt-3">
                            <h6 className="category__head">Screen Size</h6>
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Up to 3.9 in </a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 4GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 8GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 16GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 32GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 64GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 128GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 256GB& above </a>
                        </div>


                        <div className="mt-3">
                            <h6 className="category__head">Screen Size</h6>
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Up to 3.9 in </a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 4GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 8GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 16GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 32GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 64GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 128GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 256GB& above </a>
                        </div>

                        <div className="mt-3">
                            <h6 className="category__head">Screen Size</h6>
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor">Up to 3.9 in </a> <br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 4GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 8GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 16GB</a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 32GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 64GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 128GB </a><br />
                            <input type="checkbox" className="pe-2" /> <a href="" className="category__anchor"> 256GB& above </a>
                        </div>


                    </div>





                    {/* <!-- nmbcnsbc --> */}




                    <div className="container-fluid col">
                        <div className="d-flex  mobile mt-5 row">
                            <div
                                className="mobile__div1 d-flex justify-content-center mobile__div1__align-items__query col-5 col-sm-4 col-md-2 ">
                                <div>
                                    <a href=""><img src="images/mobile1.jpg" className="mobile__div__image   img-fluid " id="img1"
                                        alt="" /></a>
                                </div>
                            </div>
                            <div className="mobile__div2 ps-2 pt-3 col">
                                <a href="" className="mobile__div2__anchor cart__anchor  ">Itel P40 (6000mAh Battery with Fast Charging
                                    |
                                    2GB
                                    RAM
                                    + 64GB ROM, Up to 4GB RAM with Memory Fusion | 13MP AI Dual Rear Camera) - Luxurious Gold</a>
                                <br />
                                <div className="d flex">
                                    <a href="" className="d flex cart__anchor text-white mobile__div2__icon"> <span>4.6</span> <i
                                        className="fa-solid fa-star fa-2xs "></i></a> <span className="ratings">300 Ratings & 20
                                            Reviews</span>
                                </div>
                                <a href="" className="cart__anchor">
                                    <p className="mobile__div2__p2"><span className="mobile__div2__span1">$299</span>
                                        <span className="mobile__div2__span2">$2999 <span className="cart__border"></span> </span>
                                        <span className="mobile__div2__span3"> 94% off</span>
                                    </p>
                                </a>
                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 16.51 cm (6.5 inch) HD+ Display</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 50MP + 0.3MP | 5MP Front Camera</p>
                                </div>

                            </div>
                        </div>

                        <div className="d-flex  mobile mt-5 row">
                            <div
                                className="mobile__div1 d-flex justify-content-center mobile__div1__align-items__query col-5 col-sm-4 col-md-2 ">
                                <div>
                                    <a href=""><img src="images/mobile2.jpg" className="mobile__div__image   img-fluid " alt="" /></a>
                                </div>
                            </div>
                            <div className="mobile__div2 ps-2 pt-3 col">
                                <a href="" className="mobile__div2__anchor cart__anchor  ">Redmi K50i 5G (Quick Silver, 6GB RAM, 128GB Storage) | Flagship Mediatek Dimensity 8100 Processor | 144Hz Liquid FFS Display</a>
                                <br />
                                <div className="d flex">
                                    <a href="" className="d flex cart__anchor text-white mobile__div2__icon"> <span>4.1</span> <i
                                        className="fa-solid fa-star fa-2xs "></i></a> <span className="ratings">100 Ratings & 25
                                            Reviews</span>

                                </div>
                                <a href="" className="cart__anchor">
                                    <p className="mobile__div2__p2"><span className="mobile__div2__span1">$499</span>
                                        <span className="mobile__div2__span2">$2999 <span className="cart__border"></span> </span>
                                        <span className="mobile__div2__span3"> 96% off</span>
                                    </p>
                                </a>
                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 16.51 cm (6.5 inch) HD+ Display</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 50MP + 0.3MP | 5MP Front Camera</p>
                                </div>

                            </div>
                        </div>

                        <div className="d-flex  mobile mt-5 row">
                            <div
                                className="mobile__div1 d-flex justify-content-center mobile__div1__align-items__query col-5 col-sm-4 col-md-2 ">
                                <div>
                                    <a href=""><img src="images/mobile3.jpg" className="mobile__div__image   img-fluid " alt="" /></a>
                                </div>
                            </div>
                            <div className="mobile__div2 ps-2 pt-3 col">
                                <a href="" className="mobile__div2__anchor cart__anchor  ">OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB Storage)</a>
                                <br />
                                <div className="d flex">
                                    <a href="" className="d flex cart__anchor text-white mobile__div2__icon"> <span>4.6</span> <i
                                        className="fa-solid fa-star fa-2xs "></i></a> <span className="ratings">500 Ratings & 20 Reviews</span>

                                </div>
                                <a href="" className="cart__anchor">
                                    <p className="mobile__div2__p2"><span className="mobile__div2__span1">$200</span>
                                        <span className="mobile__div2__span2">$2999 <span className="cart__border"></span> </span>
                                        <span className="mobile__div2__span3"> 86% off</span>
                                    </p>
                                </a>
                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 16.51 cm (6.5 inch) HD+ Display</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 50MP + 0.3MP | 5MP Front Camera</p>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex  mobile mt-5 row">
                            <div
                                className="mobile__div1 d-flex justify-content-center mobile__div1__align-items__query col-5 col-sm-4 col-md-2 ">
                                <div>
                                    <a href=""><img src="images/mobile4.jpg" className="mobile__div__image   img-fluid " alt="" /></a>
                                </div>
                            </div>
                            <div className="mobile__div2 ps-2 pt-3 col">
                                <a href="" className="mobile__div2__anchor cart__anchor  ">Itel P40 (6000mAh Battery with Fast Charging
                                    |
                                    2GB
                                    RAM
                                    + 64GB ROM, Up to 4GB RAM with Memory Fusion | 13MP AI Dual Rear Camera) - Luxurious Gold</a>
                                <br />
                                <div className="d flex">
                                    <a href="" className="d flex cart__anchor text-white mobile__div2__icon"> <span>4.7</span> <i
                                        className="fa-solid fa-star fa-2xs "></i></a> <span className="ratings">100 Ratings & 30
                                            Reviews</span>

                                </div>
                                <a href="" className="cart__anchor">
                                    <p className="mobile__div2__p2"><span className="mobile__div2__span1">$250</span>
                                        <span className="mobile__div2__span2">$2999 <span className="cart__border"></span> </span>
                                        <span className="mobile__div2__span3"> 80% off</span>
                                    </p>
                                </a>
                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 16.51 cm (6.5 inch) HD+ Display</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 50MP + 0.3MP | 5MP Front Camera</p>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex  mobile mt-5 row">
                            <div
                                className="mobile__div1 d-flex justify-content-center mobile__div1__align-items__query col-5 col-sm-4 col-md-2 ">
                                <div>
                                    <a href=""><img src="images/mobile6.jpg" className="mobile__div__image   img-fluid " alt="" /></a>
                                </div>
                            </div>
                            <div className="mobile__div2 ps-2 pt-3 col">
                                <a href="" className="mobile__div2__anchor cart__anchor  ">OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB Storage)</a>
                                <br />
                                <div className="d flex">
                                    <a href="" className="d flex cart__anchor text-white mobile__div2__icon"> <span>4.1</span> <i
                                        className="fa-solid fa-star fa-2xs "></i></a> <span className="ratings">300 Ratings &  15
                                            Reviews</span>

                                </div>
                                <a href="" className="cart__anchor">
                                    <p className="mobile__div2__p2"><span className="mobile__div2__span1">$350</span>
                                        <span className="mobile__div2__span2">$2999 <span className="cart__border"></span> </span>
                                        <span className="mobile__div2__span3"> 75% off</span>
                                    </p>
                                </a>
                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 16.51 cm (6.5 inch) HD+ Display</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 50MP + 0.3MP | 5MP Front Camera</p>
                                </div>
                            </div>
                        </div>



                        <div className="d-flex  mobile mt-5 row">
                            <div
                                className="mobile__div1 d-flex justify-content-center mobile__div1__align-items__query col-5 col-sm-4 col-md-2 ">
                                <div>
                                    <a href=""><img src="images/mobile2.jpg" className="mobile__div__image   img-fluid " alt="" /></a>
                                </div>
                            </div>
                            <div className="mobile__div2 ps-2 pt-3 col">
                                <a href="" className="mobile__div2__anchor cart__anchor  ">Redmi Note 12 5G Mystique Blue 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera</a>
                                <br />
                                <div className="d flex">
                                    <a href="" className="d flex cart__anchor text-white mobile__div2__icon"> <span>4.5</span> <i
                                        className="fa-solid fa-star fa-2xs "></i></a> <span className="ratings">100 Ratings &  30
                                            Reviews</span>

                                </div>
                                <a href="" className="cart__anchor">
                                    <p className="mobile__div2__p2"><span className="mobile__div2__span1">$450</span>
                                        <span className="mobile__div2__span2">$2999 <span className="cart__border"></span> </span>
                                        <span className="mobile__div2__span3"> 83% off</span>
                                    </p>
                                </a>
                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 16.51 cm (6.5 inch) HD+ Display</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 50MP + 0.3MP | 5MP Front Camera</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex  mobile mt-5 row">
                            <div
                                className="mobile__div1 d-flex justify-content-center mobile__div1__align-items__query col-5 col-sm-4 col-md-2 ">
                                <div>
                                    <a href=""><img src="images/mobile7.jpg" className="mobile__div__image   img-fluid " alt="" /></a>
                                </div>
                            </div>
                            <div className="mobile__div2 ps-2 pt-3 col">
                                <a href="" className="mobile__div2__anchor cart__anchor  ">Itel P40 (6000mAh Battery with Fast Charging
                                    |
                                    2GB
                                    RAM
                                    + 64GB ROM, Up to 4GB RAM with Memory Fusion | 13MP AI Dual Rear Camera) - Luxurious Gold</a>
                                <br />
                                <div className="d flex">
                                    <a href="" className="d flex cart__anchor text-white mobile__div2__icon"> <span>4.2</span> <i
                                        className="fa-solid fa-star fa-2xs "></i></a> <span className="ratings">200 Ratings &  35
                                            Reviews</span>

                                </div>
                                <a href="" className="cart__anchor">
                                    <p className="mobile__div2__p2"><span className="mobile__div2__span1">$299</span>
                                        <span className="mobile__div2__span2">$2999 <span className="cart__border"></span> </span>
                                        <span className="mobile__div2__span3"> 78% off</span>
                                    </p>
                                </a>
                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 16.51 cm (6.5 inch) HD+ Display</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 50MP + 0.3MP | 5MP Front Camera</p>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex  mobile mt-5 row">
                            <div
                                className="mobile__div1 d-flex justify-content-center mobile__div1__align-items__query col-5 col-sm-4 col-md-2 ">
                                <div>
                                    <a href=""><img src="images/mobile8.jpg" className="mobile__div__image   img-fluid " alt="" /></a>
                                </div>
                            </div>
                            <div className="mobile__div2 ps-2 pt-3 col">
                                <a href="" className="mobile__div2__anchor cart__anchor  ">Redmi Note 12 5G Mystique Blue 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera</a>
                                <br />
                                <div className="d flex">
                                    <a href="" className="d flex cart__anchor text-white mobile__div2__icon"> <span>4.9</span> <i
                                        className="fa-solid fa-star fa-2xs "></i></a> <span className="ratings">500 Ratings &  45
                                            Reviews</span>

                                </div>
                                <a href="" className="cart__anchor">
                                    <p className="mobile__div2__p2"><span className="mobile__div2__span1">$399</span>
                                        <span className="mobile__div2__span2">$2999 <span className="cart__border"></span> </span>
                                        <span className="mobile__div2__span3"> 79% off</span>
                                    </p>
                                </a>
                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 16.51 cm (6.5 inch) HD+ Display</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 50MP + 0.3MP | 5MP Front Camera</p>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex  mobile mt-5 row">
                            <div
                                className="mobile__div1 d-flex justify-content-center mobile__div1__align-items__query col-5 col-sm-4 col-md-2 ">
                                <div>
                                    <a href=""><img src="images/mobile9.jpg" className="mobile__div__image   img-fluid " alt="" /></a>
                                </div>
                            </div>
                            <div className="mobile__div2 ps-2 pt-3 col">
                                <a href="" className="mobile__div2__anchor cart__anchor  ">OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB Storage)</a>
                                <br />
                                <div className="d flex">
                                    <a href="" className="d flex cart__anchor text-white mobile__div2__icon"> <span>4.5</span> <i
                                        className="fa-solid fa-star fa-2xs "></i></a> <span className="ratings">100 Ratings &  25
                                            Reviews</span>

                                </div>
                                <a href="" className="cart__anchor">
                                    <p className="mobile__div2__p2"><span className="mobile__div2__span1">$499</span>
                                        <span className="mobile__div2__span2">$2999 <span className="cart__border"></span> </span>
                                        <span className="mobile__div2__span3"> 80% off</span>
                                    </p>
                                </a>
                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 16.51 cm (6.5 inch) HD+ Display</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 50MP + 0.3MP | 5MP Front Camera</p>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex  mobile mt-5 row">
                            <div
                                className="mobile__div1 d-flex justify-content-center mobile__div1__align-items__query col-5 col-sm-4 col-md-2 ">
                                <div>
                                    <a href=""><img src="images/mobile10.jpg" className="mobile__div__image   img-fluid " alt="" /></a>
                                </div>
                            </div>
                            <div className="mobile__div2 ps-2 pt-3 col">
                                <a href="" className="mobile__div2__anchor cart__anchor  ">Itel P40 (6000mAh Battery with Fast Charging
                                    |
                                    2GB
                                    RAM
                                    + 64GB ROM, Up to 4GB RAM with Memory Fusion | 13MP AI Dual Rear Camera) - Luxurious Gold</a>
                                <br />
                                <div className="d flex">
                                    <a href="" className="d flex cart__anchor text-white mobile__div2__icon"> <span>4.1</span> <i
                                        className="fa-solid fa-star fa-2xs "></i></a> <span className="ratings">200 Ratings &  20
                                            Reviews</span>

                                </div>
                                <a href="" className="cart__anchor">
                                    <p className="mobile__div2__p2"><span className="mobile__div2__span1">$599</span>
                                        <span className="mobile__div2__span2">$2999 <span className="cart__border"></span> </span>
                                        <span className="mobile__div2__span3"> 82% off</span>
                                    </p>
                                </a>
                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 16.51 cm (6.5 inch) HD+ Display</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 50MP + 0.3MP | 5MP Front Camera</p>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex  mobile mt-5 row">
                            <div
                                className="mobile__div1 d-flex justify-content-center mobile__div1__align-items__query col-5 col-sm-4 col-md-2 ">
                                <div>
                                    <a href=""><img src="images/mobile2.jpg" className="mobile__div__image   img-fluid " alt="" /></a>
                                </div>
                            </div>
                            <div className="mobile__div2 ps-2 pt-3 col">
                                <a href="" className="mobile__div2__anchor cart__anchor  ">OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB Storage)</a>
                                <br />
                                <div className="d flex">
                                    <a href="" className="d flex cart__anchor text-white mobile__div2__icon"> <span>4.0</span> <i
                                        className="fa-solid fa-star fa-2xs "></i></a> <span className="ratings">400 Ratings &  22
                                            Reviews</span>

                                </div>
                                <a href="" className="cart__anchor">
                                    <p className="mobile__div2__p2"><span className="mobile__div2__span1">$299</span>
                                        <span className="mobile__div2__span2">$2999 <span className="cart__border"></span> </span>
                                        <span className="mobile__div2__span3"> 83% off</span>
                                    </p>
                                </a>
                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 16.51 cm (6.5 inch) HD+ Display</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 50MP + 0.3MP | 5MP Front Camera</p>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex  mobile mt-5 row">
                            <div
                                className="mobile__div1 d-flex justify-content-center mobile__div1__align-items__query col-5 col-sm-4 col-md-2 ">
                                <div>
                                    <a href=""><img src="images/mobile4.jpg" className="mobile__div__image   img-fluid " alt="" /></a>
                                </div>
                            </div>
                            <div className="mobile__div2 ps-2 pt-3 col">
                                <a href="" className="mobile__div2__anchor cart__anchor  ">Redmi Note 12 5G Mystique Blue 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera</a>
                                <br />
                                <div className="d flex">
                                    <a href="" className="d flex cart__anchor text-white mobile__div2__icon"> <span>4.6</span> <i
                                        className="fa-solid fa-star fa-2xs "></i></a> <span className="ratings">100 Ratings &  28
                                            Reviews</span>

                                </div>
                                <a href="" className="cart__anchor">
                                    <p className="mobile__div2__p2"><span className="mobile__div2__span1">$399</span>
                                        <span className="mobile__div2__span2">$2999 <span className="cart__border"></span> </span>
                                        <span className="mobile__div2__span3"> 85% off</span>
                                    </p>
                                </a>
                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 16.51 cm (6.5 inch) HD+ Display</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="fa-sharp fa-solid fa-circle pe-2"></i>
                                    <p> 50MP + 0.3MP | 5MP Front Camera</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}



export default Mobiles