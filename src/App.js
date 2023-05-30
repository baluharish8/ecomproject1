
import { useRef, useState, useEffect } from "react";
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

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    return (
        <>
            <div className="mainbody " >
                {/* MULTI CAROUSEL */}
                <Carousel></Carousel>
                {/* SLIDER ME */}
                {/* SLIDER ME*/}

                <div id="navbarlargeone" className="d-flex row container-fluid justify-content-center  bg-white pt-2 pb-2 boxshadow ">
                    <div className="d-flex justify-content-around  col-12 col-sm-6 col-md-4  pare ">
                        <li className="sss center   ">
                            <a className="ss text-white navfs " href="https://www.amazon.in/s?k=fashion&crid=330VC5AC7RPB2&sprefix=fashion%2Caps%2C526&ref=nb_sb_noss_1"> <img src="images/linkfashion.jpg" className="border" alt="" />
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
<a className="ss text-white navfs " href="https://www.amazon.in/gp/browse.html?node=976419031&ref_=nav_em_sbc_tvelec_all_elec_0_2_9_13"> <img src="images/linkelectronic.jpg" className="border" alt="" />
                                <br />
                                Electronics</a>
                        </li>

                    </div>
                    <div className="d-flex justify-content-around  col-12 col-sm-6 col-md-4">
                        <li className="sss center  ">
                            <a className="ss text-white navfs " href="https://www.amazon.in/gp/browse.html?node=5122348031&ref_=nav_em_sbc_tvelec_all_appliance_0_2_9_20"> <img src="images/linkappliances.jpg" className="border" alt="" />
                                <br />
                                Appliances</a>
                        </li>
                        <li className="sss center   ">
                            <a className="ss text-white navfs " href="https://www.amazon.in/s?k=furniture&ref=nb_sb_noss_1"> <img src="images/linkhome.jpg" className="border" alt="" />
                                <br />
                                Furniture</a>
                        </li>
                        <li className="sss text-center   ">
                            <a className="ss text-white navfs " href="https://www.amazon.in/gp/browse.html?node=1984443031&ref_=nav_em_sbc_sportslugg_all_sports_0_2_14_15"> <img src="images/linksports.jpg" className="border ms-2" alt="" /> <br></br>
                                            <span>
                                            Sports&Fitness
                                            </span>
                                            </a>
                            {/* <img src="images/linksports.jpg" className="border " alt="" /> <br></br>
                            <span className="text-white navfs">
                                Sports&Fitness
                            </span> */}
                        </li>

                    </div>
                    <div className="d-flex justify-content-around col-12 col-sm-6 col-md-4">
                        <li className="sss center  ">
                            <a className="ss text-white navfs " href="https://www.amazon.in/gp/browse.html?node=5925789031&ref_=nav_em_sbc_hk_kitchendining_0_2_12_3"> <img src="images/linkkitchen.jpg" className="border" alt="" />
                                <br />
                                Kitchen </a>
                        </li>
                        <li className="sss center   ">
                            <a className="ss text-white navfs " href="https://www.amazon.in/gp/browse.html?node=1350380031&ref_=nav_em_sbc_tbk_toys_games_0_2_15_2"> <img src="images/linktoy.jpg" className="border" alt="" />
                                <br />
                                Kid Toys</a>
                        </li>
                        <li className="sss center   ">
                            <a className="ss text-white navfs " href="https://www.amazon.in/s?k=footwear&ref=nb_sb_noss"> <img src="images/linkfootware.jpg" className="border" alt="" />
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
                            <a href="https://www.amazon.in/s?k=mobiles&crid=2CVFQERFF2ZZL&sprefix=%2Caps%2C204&ref=nb_sb_ss_recent_2_0_recent" target="_self"><img src="images/cart1mbl.jpg" alt="" className="cart__image" /></a>
                            <p className="cart__p1">Mobile phones</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$250</span>
                                    <span className="cart__anchor__span2">$3999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 95% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <a href="https://www.amazon.in/OnePlus-Wireless-Earbuds-Titanium-Playback/dp/B0B4VV75ZW/ref=sr_1_9?crid=321Q47PEQCJBC&keywords=bluetooth%2Bearpods&qid=1685429924&sprefix=bluetooth%2Bear%2Caps%2C257&sr=8-9&th=1" ><img src="images/cart3ear.jpg" alt="" className="cart__image" /></a>
                            <p className="cart__p1">Wire less headphone</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$259</span>
                                    <span className="cart__anchor__span2">$2539 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 81% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <a href="https://www.amazon.in/s?k=Branded+shoes&crid=29FAXOFHM7FV1&sprefix=branded+shoes%2Caps%2C225&ref=nb_sb_noss_1"><img src="images/cart4shoe.jpg" alt="" className="cart__image" /></a>
                            <p className="cart__p1">Branded Shoes</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$99</span>
                                    <span className="cart__anchor__span2">$999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 75% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <a href="https://www.amazon.in/Sounce-Adjustable-Compatible-iPhone12-Smartphones/dp/B09CYDJ8DQ/ref=sr_1_8?crid=TU2CEI43YTXB&keywords=mobile+holders&qid=1685430245&sprefix=mobile+holders%2Caps%2C266&sr=8-8"><img src="images/cart8mbl.jpg" alt="" className="cart__image" /></a>
                            <p className="cart__p1">Mobile stick</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$199</span>
                                    <span className="cart__anchor__span2">$2999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 93% off</span>
                                </p>
                            </Link>
                        </div>

                        <div className="cart col col-md-4 col-lg-2">
                            <a href="https://www.amazon.in/gp/product/B07V7ZWFJB/ref=s9_acss_bw_cg_mainbann_4a1_w?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-3&pf_rd_r=7RG28QDSAX26YP5A9J0D&pf_rd_t=101&pf_rd_p=2a4d01cf-f5d2-4f7d-b9e7-ded80dc58e58&pf_rd_i=9574337031" target="_self"><img src="images/cart7mbl.jpg" alt="" className="cart__image" /></a>
                            <p className="cart__p1">Honor mobiles</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$399</span>
                                    <span className="cart__anchor__span2">$4999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 70% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <a href="https://www.amazon.in/s?k=samsung+folded+mobile+phones&crid=35M8JVXFQ88KF&sprefix=folded+mobile%2Caps%2C905&ref=nb_sb_ss_ts-doa-p_5_13"><img src="images/cart2mbl.jpg" alt="" className="cart__image" /></a>
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
                            <a href="https://www.amazon.in/Ambrane-Adjustment-Compatibility-Multipurpose-Anti-Skid/dp/B09ZPL5VYM/ref=sr_1_7?crid=TU2CEI43YTXB&keywords=mobile+holders&qid=1685430245&sprefix=mobile+holders%2Caps%2C266&sr=8-7"><img src="images/row2cart1.jpg" alt="" className="cart__image2" /></a>
                            <p className="cart__p1">Mobile stand</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$99</span>
                                    <span className="cart__anchor__span2">$999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 53% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <a href="https://www.amazon.in/gp/browse.html?node=11400137031&ref_=nav_em_sbc_wfashion_western_0_2_11_3"><img src="images/row2cart5.jpg" alt="" className="cart__image2" /></a>
                            <p className="cart__p1">Womens fashion</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$199</span>
                                    <span className="cart__anchor__span2">$2999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 93% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <a href="https://www.amazon.in/Titan-Smartwatch-Advanced-Immersive-Resolution/dp/B0BR432Y5V/ref=sr_1_5?crid=1G8UYTUBWAXJ5&keywords=branded+watches+for+men&qid=1685430571&sprefix=branded+watches%2Caps%2C286&sr=8-5"><img src="images/row2cart3.jpg" alt="" className="cart__image2" /></a>
                            <p className="cart__p1">Branded watch</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$299</span>
                                    <span className="cart__anchor__span2">$3999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 95% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <a href="https://www.amazon.in/gp/browse.html?node=1968024031&ref_=nav_em_sbc_mfashion_clothing_0_2_10_2"><img src="images/row2cart4.jpg" alt="" className="cart__image2" /></a>
                            <p className="cart__p1">Mens fashion</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$299</span>
                                    <span className="cart__anchor__span2">$2999 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 96% off</span>
                                </p>
                            </Link>
                        </div>

                        <div className="cart col col-md-4 col-lg-2">
                            <a href="https://www.amazon.in/WeCool-Stabilizer-Wireless-Extendable-Bluetooth/dp/B09PRHQL1P/ref=sr_1_13?keywords=mobile+gimbal&qid=1685430695&sr=8-13"><img src="images/row2cart2.jpg" alt="" className="cart__image2" /></a>
                            <p className="cart__p1">Mobile gimbal</p>
                            <Link href="" className="cart__anchor">
                                <p className="cart__anchor__p2"><span className="cart__anchor__span1">$99</span>
                                    <span className="cart__anchor__span2">$199 <span className="cart__border"></span> </span>
                                    <span className="cart__anchor__span3"> 83% off</span>
                                </p>
                            </Link>
                        </div>
                        <div className="cart col col-md-4 col-lg-2">
                            <a href="https://www.amazon.in/Samsung-Inches-Wondertainment-UA32T4340BKXXL-Glossy/dp/B09F6S8BT6/ref=sr_1_4?crid=LHKHE1UNPAXB&keywords=led+tv&qid=1685430969&sprefix=led%2Caps%2C262&sr=8-4"><img src="images/row2cart6.jpg" alt="" className="cart__image2" /></a>
                            <p className="cart__p1">Samsung 80cm LED TV</p>
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