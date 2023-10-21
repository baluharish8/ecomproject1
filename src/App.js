
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Mobiles from "./mobiles";
import Footer from "./footer";
import Header from "./header";
import Login from "./loginmodified";
import "./App.css"
import { HashRouter } from "react-router-dom";
import { getData, postData, putData, deleteData } from "./api"
import { useEffect, useState, useRef } from "react";
import EditProfiles from "./editprofile";

function App() {
    const ref = useRef();
    const [showroute, setShowRoute] = useState(false)
    const [storeddata, setStoredData] = useState()
    const [userData, setUserData] = useState('')
    const [trigger, setTrigger] = useState(0);
    const [trigger2, setTrigger2] = useState(0);

    let [showlogincomp, setShowLoginComp] = useState()
    const [userinfo, setUserInfo] = useState('')

    const [serverDownErrorShow, setServerDownErrorShow] = useState(false)
    function showRouteToggle() {
        setShowRoute(!showroute)
        // console.log(e)
    }
    async function storingDataFun() {
        const result = await getData()
        setStoredData(result.data)

    }
    useEffect(() => {
        storingDataFun()
        serverDownErrorFun()
    }, [])
    console.log(storeddata)

    async function getFun() {
        return await getData()
        //   console.log(res.data)
    }
    async function serverDownErrorFun() {
        const result = await getData()
        if (result === true) {
            setServerDownErrorShow(true)
            console.log(result + 'serverDownSuccess')
            // document.body.style.overflow = serverDownErrorShow ? 'auto' : 'hidden';
        }
    }



    // const basename = document.querySelector('base')?.getAttribute('href') ?? '/' 
    return (
        <><div className="maindi" >

            {/* <BrowserRouter basename={process.env.PUBLIC_URL} > */}
            {/* <BrowserRouter > */}
            <HashRouter>

                {!showroute && <Header storingDataFun={storingDataFun} trigger={trigger} trigger2={trigger2} userinfo={userinfo} showRouteToggle={showRouteToggle} getFun={getFun} storeddata={storeddata} setUserData={setUserData} userData={userData} ></Header>}
                {serverDownErrorShow &&
                    <div className="modalServer " >
                        <div className="modal-dialog" id='modal-dia'>
                            <div className="modal-content" id='modal-dia2'>
                                <div className=" text-white bg-danger d-flex justify-content-center p-5 fs-3 ">

                                    <i className="fa-solid fa-face-frown fa-5x"></i>
                                </div>
                                <div className="modal-body">
                                    <h6 className="text-dark p1">
                                        The work is going on the backend server, so it is temporarily turned off by the admin.<br></br> Please contact the admin(Harish).
                                    </h6>
                                </div>
                                <div className="modal-foote text-center pb-4">
                                    <button type="button" className="btn btn-danger " onClick={() => { window.location.reload() }} id="sucreg"
                                        data-bs-dismiss="modal">Refresh page </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <Routes>
                    {/* <Route path='/login' element={<Login showRouteToggle={showRouteToggle} ></Login> } /> */}
                    <Route exact path='/login' element={<Login storingDataFun={storingDataFun} setUserInfo={setUserInfo} setTrigger2={setTrigger2} setUserData={setUserData} showRouteToggle={showRouteToggle} getFun={getFun} storeddata={storeddata} ></Login>} />

                    <Route exact path='/mobiles' element={<Mobiles></Mobiles>} />
                    <Route path='/edit' element={<EditProfiles userData={userData} setUserData={setUserData} storingDataFun={storingDataFun} setTrigger={setTrigger} ></EditProfiles>} />

                    {!showroute && <>
                        <Route exact path='/' element={<Home />} />
                    </>
                    }

                </Routes>
                {!showroute && <Footer></Footer>}

            </HashRouter>
            {/* </BrowserRouter > */}
        </div>

        </>
    )
}

export default App