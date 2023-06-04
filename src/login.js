
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

import './login.css';
function Login(p) {
    // console.log(p)
    const history = useNavigate()
    let [un, setUn] = useState('')
    let [pw, setPw] = useState('')
    let [errors, setError] = useState({
        une: '',
        pwe: '',
        cnp:''
    })
    let [signinpt, setSigninpt] = useState('')
    let [signuppw, setSignuppw] = useState('')
    let [cnpw, setCnpw] = useState('')
    const [submit,setSubmit]=useState(false)
    const [register,setRegister]=useState(false)
    const [confirmerror,setConfirmError]=useState(false)
 const[loginpasswordiconshow,setLoginPasswordIconShow]=useState(false);
 const[loginpasswordfield,setLoginPasswordField]=useState(false);
 const[registerpasswordiconshow,setRegisterPasswordIconShow]=useState(false);
 const[registerpasswordfield,setRegisterPasswordField]=useState(false);
 const[confirmpasswordiconshow,setConfirmPasswordIconShow]=useState(false);
 const[confirmpasswordfield,setConfirmPasswordField]=useState(false);


    let auth1 = false;
    let auth2 = false;
    let auth3 = false;
    let [auth4, setAuth4] = useState(false)
    let [formshow, setFormShow] = useState(false)
    let [modalshow,setModalShow]=useState(false)

    let [storedvalue, setStoredvalue] = useState(
        [
            {
                fname: "NIDIGONDA HARISH",
                pw: "12345678"
            },
            {
                fname: "MAHENDER ADEPU",
                pw: "87654321"
            }

        ])
    useEffect(() => {
        
        console.log(storedvalue);
    }, [storedvalue]);

    function signUp() {
        setRegister(true)
        if (signinpt.trim() == '') {
            console.log('enter value')
        }else if (signuppw.trim() == cnpw.trim()) {
            setStoredvalue([...storedvalue, { fname: signinpt, pw: signuppw }])
     
            modalShowToggle()
            setError((errors) => ({ ...errors, cnp: '' }))
            setRegister(false)
            setConfirmError(false)
        }
        else {
            setError((errors) => ({ ...errors, cnp: 'Password Not Match' }))
            setConfirmError(true)
            console.log('not match')
        }
    }
    function clearInput() {
        setSigninpt('')
        setSignuppw('')
        setCnpw('')
    }

    function toggleShow() {
        setFormShow(!formshow)
        setSubmit(false)
        setUn('')
        setPw('')
    }
    function modalShowToggle() {
        setModalShow(!modalshow)
        // setUn('')
        // setPw('')
    }


    function subFun(e) {
        e.preventDefault()
setSubmit(true)
        if (un.trim() == '') {
            setError((errors) => ({ ...errors, une: 'Enter user Name' }))


        } else {
            // setAuth1(true)
            auth1 = true;
            setError((errors) => ({ ...errors, une: '' }))
            // errors.une='';

        }

        if (pw.trim() == '') {
            setError((errors) => ({ ...errors, pwe: 'Enter Password' }))
            // errors.pwe='Enter value';

        } else {
            // setAuth2(true)
            auth2 = true;
            setError((errors) => ({ ...errors, pwe: '' }))
            // errors.pwe='';

        }
        if (auth1 == true && auth2 == true) {
            storedvalue.map((element) => {
                if (un.trim() == element.fname && pw.trim() == element.pw) {
                    auth3 = true;
            console.log("auth3 set true")
            console.log("auths true all")

            history('/')
            p.showLoginCompToggle()
            p.showRouteToggle()
            p.showUserProToggle()
            p.setUserInfo(element.fname)
            setSubmit(false)
                } else {
                    setAuth4(true)
                    // console.log("auth3 not true")

                }
            });
        }      
    }
    useEffect(
        ()=>{
            console.log(loginpasswordiconshow)
        },[loginpasswordiconshow]
    )

    return (
        <>
            <div  className="bodydiv">

                {!formshow && <div className=" form__show" id="loginid">
                    <h1 className='h1'>Login Page</h1>
                    <div className='container'>
                    <div className='row d-flex justify-content-center p-3'>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4 divc  " id="loginnerdiv">
                        <form action="" id="form" className='form' >
                            <label className="lab label" htmlFor="yname"> <input type="text" className='text input ' value={un} onChange={(e) => { setUn(e.target.value) }} name="name" id="yname" required
                                placeholder="Enter user name" /> </label>
                            {/* <p className='text-danger text-start p1' > {errors.une} </p> */}
                            {
                               submit&&un.trim()===''&&  <p className='text-danger text-start p1' >Please Enter Username </p>
                                      
                            }
                           
                           <div className='loginpasswordinput'>
                            <input type={loginpasswordfield?"text":"password"} className='text input ' value={pw} onChange={(e) => { setPw(e.target.value) }} name="name" id="password"
                                required placeholder="Enter your password" /> 
                               {/*  Icon not changing while using ternary operator  {
                                loginpasswordiconshow ? <button className='loginpasswordicon transparent' onClick={()=>{setLoginPasswordIconShow(false)}} > <i className="fa fa-eye-slash "  aria-hidden="true"></i> </button> : <button className='loginpasswordicon transparent' onClick={()=>{setLoginPasswordIconShow(true)}} > <i className="fa fa-eye "  aria-hidden="true"></i> </button>
                               } */}
                               
                                {
                                loginpasswordiconshow&& <button className='loginpasswordicon transparent' onClick={()=>{setLoginPasswordIconShow(false); setLoginPasswordField(false)}} > <i className="fa fa-eye-slash "  aria-hidden="true"></i> </button>   

                                }
                                      {
                                !loginpasswordiconshow&& <button className='loginpasswordicon transparent' onClick={()=>{setLoginPasswordIconShow(true); setLoginPasswordField(true)}} > <i className="fa fa-eye "  aria-hidden="true"></i> </button>   

                                }
                               
                            </div>
                            {/* <p className='text-danger text-start p1' > {errors.pwe} </p> */}
                            {
                               submit&&pw.trim()===''&&  <p className='text-danger text-start p1' >Please Enter Password </p>
                                      
                            }
                           
                            
                            <input type="submit" className='submit input' onClick={(e) => { subFun(e) }} name="submit" id="sub" value="Login" />
                     
                       
                        </form>
                        {auth4 && <>
                            <div className=' text-dark w-100  d-flex justify-content-center align-items-center mt-2' >
                            <p className='w-50 text-danger  d-flex justify-content-center align-items-center  border border-danger rounded-1 p-1' >  check
                            your user name & password </p>
                            </div>
                            <div className=' text-danger w-100  d-flex flex-column justify-content-center align-items-center m-0 p-0 h4 ' > <div> <p className='m-0 p-0 '> OR </p> </div> <div> <i class="fa fa-angle-double-down" aria-hidden="true"></i> </div> </div>
                        </>    
                        }
                        <div className='text-center'>
                        <button onClick={() => { toggleShow() }} id="errorloginbutton" className="btn btn-info w-80  text-white p-2 mt-2 "> Register here  </button>

                        </div>


                    </div>
                    </div>
                    </div>
                 
                </div>
                }

                {formshow && <div className="form__hid" id="signupid">
                    <h1 className='h1'>Register here</h1>
                    <div className='container'>
                    <div className='row d-flex justify-content-center p-3'>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4 divc  " id="loginnerdiv">
                        <form action="" id="form2" className='form'>
                            <label className="lab label" htmlFor="yname2"> <input type="text" className='text input' value={signinpt} onChange={(e) => { setSigninpt(e.target.value) }} name="name" id="yname2" required
                                placeholder="Enter user name" />  </label>
                                  {
                               register&&signinpt.trim()===''&&  <p className='text-danger text-start p1' >Please Enter Username </p>
                                      
                            }
                            <div className='loginpasswordinput' > 
                            <input type={registerpasswordfield?"text":"password"} className='text input' value={signuppw} onChange={(e) => { setSignuppw(e.target.value) }} name="name" id="password2"
                                required placeholder="Enter your password" />
                                                    {
                                registerpasswordiconshow&& <button className='loginpasswordicon transparent' onClick={()=>{setRegisterPasswordIconShow(false); setRegisterPasswordField(false)}} > <i className="fa fa-eye-slash "  aria-hidden="true"></i> </button>   

                                }
                                      {
                                !registerpasswordiconshow&& <button className='loginpasswordicon transparent' onClick={()=>{setRegisterPasswordIconShow(true); setRegisterPasswordField(true)}} > <i className="fa fa-eye "  aria-hidden="true"></i> </button>   

                                }
                                </div> 
                                       {
                               register&&signuppw.trim()===''&&  <p className='text-danger text-start p1' >Please Enter Password </p>
                                      
                            }
                            <div className='loginpasswordinput' > 
                             <input type={confirmpasswordfield?"text":"password"} className='text input' value={cnpw} onChange={(e) => { setCnpw(e.target.value); setConfirmError(false) }} name="name" id="cnpassword"
                                required placeholder="Confirm password" />
                                                          {
                                confirmpasswordiconshow&& <button className='loginpasswordicon transparent' onClick={()=>{setConfirmPasswordIconShow(false); setConfirmPasswordField(false)}} > <i className="fa fa-eye-slash "  aria-hidden="true"></i> </button>   

                                }
                                      {
                                !confirmpasswordiconshow&& <button className='loginpasswordicon transparent' onClick={()=>{setConfirmPasswordIconShow(true); setConfirmPasswordField(true)}} > <i className="fa fa-eye "  aria-hidden="true"></i> </button>   

                                }
                                </div>
                            {/* <p className='text-danger ' > {errors.cnp} </p> */}
                            {
                               register&&cnpw.trim()===''&&  <p className='text-danger text-start p1' >Please Confirm Password </p>
                                      
                            }
                          {
                               confirmerror&&signuppw.trim()!==''&&cnpw.trim()!==''&& <p className='text-danger text-start p1' >Password Not Match </p>
                                      
                            }
                            

                            {/* <!-- Button trigger modal --> */}
                            <button type="button" onClick={() => { signUp();  }} className="btn signup" id="signupbtn">
                                Sign up
                            </button>

                   {modalshow&&
                           <div className="mod" >
                                <div className="modal-dialog" id='modal-dia'>
                                    <div className="modal-content" id='modal-dia2'>
                                        <div className="modal-heade">
                                            <h5 className="modal-title">Modal title</h5>
                                        </div>
                                        <div className="modal-body">
                                            <p className="text-dark p1">
                                                successfully registered <br />Click here Back to login
                                            </p>
                                        </div>
                                        <div className="modal-foote text-center pb-3">
                                            <button type="button" onClick={() => { toggleShow(); setAuth4(false); clearInput(); modalShowToggle()  }} className="btn btn-primary " id="sucreg"
                                                data-bs-dismiss="modal">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }


                        </form>
                        </div>
                        </div>  
                    </div>
                </div>
                }
            </div>

        </>
    )
}

export default Login