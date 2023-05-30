import { Link } from "react-router-dom"

function Footer(){

    return(
        <>
        <div>
       
        <button     onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'auto'});
        }} class="btn btn-secondary w-100 toppage__button headerone__logomain__icondiv "><i class="fa-solid fa-angle-up"></i> <br/> Top of Page</button>

    
    </div>
    <div class=" bg-dark   footer container-fluid">
        <div id="footer" class="d-flex justify-content-around  mt-0 m-5 p-5 pb-0 text-white row">
            <div id="footerdiv" class="col-6 col-sm-6 col-md-3">
                <h6>Get to Know Us</h6>
                <Link href="" class="footer__anchor">About Us</Link><br/>
                <Link href="" class="footer__anchor">careers</Link><br/>
                <Link href="" class="footer__anchor">Press releases</Link>
            </div>
            <div id="footerdiv" class="col-6 col-sm-6 col-md-3">
                <h6>Contact with Us</h6>
                <Link href="" class="footer__anchor">Facebook</Link><br/>
                <Link href="" class="footer__anchor">Twitter</Link><br/>
                <Link href="" class="footer__anchor">Instagram</Link>
            </div>
            <div class="col-6 col-sm-6 col-md-3">
                <h6>Make Money With Us</h6>
                <Link href="" class="footer__anchor">Facebook</Link><br/>
                <Link href="" class="footer__anchor">Twitter</Link><br/>
                <Link href="" class="footer__anchor">Instagram</Link> <br/>
                <Link href="" class="footer__anchor">Facebook</Link><br/>
                <Link href="" class="footer__anchor">Twitter</Link><br/>
                <Link href="" class="footer__anchor">Facebook</Link><br/>
                <Link href="" class="footer__anchor">Twitter</Link><br/>
                <Link href="" class="footer__anchor">100% Purchase Protection</Link> <br/>
                <Link href="" class="footer__anchor">Returns Centre</Link><br/>
            </div>
            <div class="col-6 col-sm-6 col-md-3">
                <h6>Let Us Help You</h6>
                <Link href="" class="footer__anchor">Covid-19</Link><br/>
                <Link href="" class="footer__anchor">Your Account</Link><br/>
                <Link href="" class="footer__anchor">100% Purchase Protection</Link> <br/>
                <Link href="" class="footer__anchor">Returns Centre</Link><br/>
                <Link href="" class="footer__anchor">Help</Link><br/>

            </div>
        </div>

        <div class="footer__border ">

        </div>
        <div class=" text-white d-flex justify-content-center pb-4">
            <Link href="#" class=""><img src="images/logo.png" alt=""/></Link><label for=""
                class="headerone__logomain__logodiv__label ">-Shopping</label>
        </div>
        <div class="d-flex justify-content-center align-items-center pb-4 row ">
            
            <div class="col-6 col-sm-6 col-md-3 col-lg-2">
            <Link href="" class="footer__anchor   ">Covid-19</Link><span class="footer__bottom__anchorborder ps-2 me-2 "> </span>

            </div>
            <div class="col-6 col-sm-6 col-md-3 col-lg-2">
                <Link href="" class="footer__anchor   ">Your Account</Link><span class="footer__bottom__anchorborder ps-2 me-2 "> </span>

            </div>
            <div class="col-6 col-sm-6 col-md-3 col-lg-2">
                <Link href="" class="footer__anchor   ">100% Purchase Protection</Link> <span class="footer__bottom__anchorborder ps-2 me-2 "> </span>

            </div>
            <div class="col-6 col-sm-6 col-md-3 col-lg-2">
                <Link href="" class="footer__anchor   ">Returns Centre</Link><span class="footer__bottom__anchorborder ps-2 me-2 "> </span>

            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-2">
            <Link href="" class="footer__anchor ">Help</Link>

            </div>

        </div>
    </div>

        </>
    )
}


export default Footer