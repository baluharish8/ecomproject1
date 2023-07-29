
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { getData, postData, putData, deleteData } from "./api"
import './login.css';
function Login(p) {
    // console.log(p)
    // const history = useNavigate()
    const navigate = useNavigate();

    let [un, setUn] = useState('')
    let [pw, setPw] = useState('')
    let [errors, setError] = useState({
        une: '',
        pwe: '',
        cnp: ''
    })
    let [signinpt, setSigninpt] = useState('')
    let [signuppw, setSignuppw] = useState('')
    let [cnpw, setCnpw] = useState('')
    const [submit, setSubmit] = useState(false)
    const [register, setRegister] = useState(false)
    const [confirmError, setConfirmError] = useState(false)
    const [userNameExistError, setUserNameExistError] = useState(false)
    const [loginpasswordiconshow, setLoginPasswordIconShow] = useState(false);
    const [loginpasswordfield, setLoginPasswordField] = useState(false);
    const [registerpasswordiconshow, setRegisterPasswordIconShow] = useState(false);
    const [registerpasswordfield, setRegisterPasswordField] = useState(false);
    const [confirmpasswordiconshow, setConfirmPasswordIconShow] = useState(false);
    const [confirmpasswordfield, setConfirmPasswordField] = useState(false);
    let loginuserdata;
    let auth1 = false;
    let auth2 = false;
    let auth3 = false;
    let createUserAuth = false;
    let [auth4, setAuth4] = useState(false)
    let [formshow, setFormShow] = useState(false)
    let [modalshow, setModalShow] = useState(false)

    let [post, setPost] = useState(
        {
            name: "",
            password: ""
        }
    )

    function signUp() {
        setRegister(true)
        async function checkUser(signinpt) {
            let result = await p.getFun()
            let storedvalue = result.data
            console.log(storedvalue);
            let onlyname = storedvalue.map((element) => { return element.name })
            return onlyname.toString().toLowerCase().includes(signinpt.trim().toLowerCase())
        }

        existCheck()
        async function existCheck() {
            let includesData = await checkUser(signinpt)  // includes gives true or false and giving form input to check with api
                .then((includesData) => {
                    if (includesData) {
                        console.log('Username already exists');
                        createUserAuth = true;

                        setUserNameExistError(true)
                    } else {
                        console.log('Username is available');
                        createUserAuth = false;
                        setUserNameExistError(false)
                    }
                })
                .then(() => {
                    if (signinpt.trim() == '') {
                        console.log('enter value')
                    } else if (signuppw.trim() !== cnpw.trim()) {
                        // setError((errors) => ({ ...errors, cnp: 'Password Not Match obj' }))
                        setConfirmError(true)
                        console.log('not match')
                    } else if (signuppw.trim() == cnpw.trim() && createUserAuth == false && signuppw.trim() !== '' && cnpw.trim() !== '') {
                        // setStoredvalue([...storedvalue, { fname: signinpt, pw: signuppw }])
                        postData(post)//Inserting form data to API call
                        p.storingDataFun()


                        modalShowToggle()
                        setError((errors) => ({ ...errors, cnp: '' }))
                        setRegister(false)
                        setConfirmError(false)
                    }
                    else {
                        // setError((errors) => ({ ...errors, cnp: 'Password Not Match' }))
                        // setConfirmError(true)
                        // console.log('not matchdgdgd')
                    }
                })
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

    // LOGIN FUNCTION

    function subFun(e) {  //Login button
        e.preventDefault()

        setSubmit(true)
        // setUserData('two')
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
            // setUserData('one')
            // loginCheckUser(un, pw)
            // async function loginCheckUser(un, pw) {
            //     let result = await p.getFun()
            let storedvaluelogin = p.storeddata
            console.log(storedvaluelogin)
            const namepw = storedvaluelogin.some((user) => {
                let matched = user.name.toLowerCase() === un.trim().toLowerCase() && user.password.toString() === pw.toString();
                if (matched) {

                    p.setUserData(user)
                    loginuserdata = user
                    console.log(user + "UUU")
                }
                return matched
            });

            // console.log(namepw)
            //Get LOGIN USER ID HERE

            if (namepw) {


                console.log('User exists', loginuserdata);
                auth3 = true;
                console.log("auth3 set true")
                console.log("auths true all")

                // history('/')
                navigate('/');
                p.showLoginCompToggle()
                p.showRouteToggle()
                p.setShowUserPro(true)
                p.setUserInfo(loginuserdata.name)//Profile name updated here

                setSubmit(false)

            } else {
                console.log('User does not exist');
                setAuth4(true)

            }
        }
    }



    useEffect(
        () => {
            console.log(loginpasswordiconshow)
        }, [loginpasswordiconshow]
    )

    return (
        <>
            <div className="bodydiv">

                {!formshow && <div className=" form__show" id="loginid">
                    <h1 className='h1'>Login Page</h1>
                    <div className='container'>
                        <div className='row d-flex justify-content-center p-3 '>
                            <div className="col-12 col-sm-8 col-md-6 col-lg-4 divc  " id="loginnerdiv">
                                <form action="" id="form" className='form w-75' >
                                    <label className="lab label" htmlFor="yname"> <input type="text" className='text input ' value={un} onChange={(e) => { setUn(e.target.value) }} name="name" id="yname" required
                                        placeholder="Enter user name" /> </label>
                                    {/* <p className='text-danger text-start p1' > {errors.une} </p> */}
                                    {
                                        submit && un.trim() === '' && <p className='text-danger text-start p1' >Please Enter Username </p>

                                    }

                                    <div className='loginpasswordinput'>
                                        <input type={loginpasswordfield ? "text" : "password"} className='text input ' value={pw} onChange={(e) => { setPw(e.target.value) }} name="name" id="password"
                                            required placeholder="Enter your password" />
                                        {/*  Icon not changing while using ternary operator  {
                                loginpasswordiconshow ? <button className='loginpasswordicon transparent' onClick={()=>{setLoginPasswordIconShow(false)}} > <i className="fa fa-eye-slash "  aria-hidden="true"></i> </button> : <button className='loginpasswordicon transparent' onClick={()=>{setLoginPasswordIconShow(true)}} > <i className="fa fa-eye "  aria-hidden="true"></i> </button>
                               } */}

                                        {
                                            loginpasswordiconshow && <button className='loginpasswordicon transparent' onClick={() => { setLoginPasswordIconShow(false); setLoginPasswordField(false) }} > <i className="fa fa-eye-slash " aria-hidden="true"></i> </button>

                                        }
                                        {
                                            !loginpasswordiconshow && <button className='loginpasswordicon transparent' onClick={() => { setLoginPasswordIconShow(true); setLoginPasswordField(true) }} > <i className="fa fa-eye " aria-hidden="true"></i> </button>

                                        }

                                    </div>
                                    {/* <p className='text-danger text-start p1' > {errors.pwe} </p> */}
                                    {
                                        submit && pw.trim() === '' && <p className='text-danger text-start p1' >Please Enter Password </p>

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
                                    <label className="lab label" htmlFor="yname2"> <input type="text" className='text input' value={signinpt} onChange={(e) => { setSigninpt(e.target.value); setPost({ ...post, name: e.target.value });  setUserNameExistError(false) }} name="name" id="yname2" required
                                        placeholder="Enter user name" />  </label>
                                    {
                                        register && signinpt.trim() === '' && <p className='text-danger text-start p1' >Please Enter Username </p>

                                    }
                                    {
                                        userNameExistError && signinpt.trim() !== '' && <p className='text-danger text-start p1' >Username Already Exists</p>

                                    }
                                    <div className='loginpasswordinput' >
                                        <input type={registerpasswordfield ? "text" : "password"} className='text input' value={signuppw} onChange={(e) => { setSignuppw(e.target.value); setPost({ ...post, password: e.target.value }) }} name="name" id="password2"
                                            required placeholder="Enter your password" />
                                        {
                                            registerpasswordiconshow && <button className='loginpasswordicon transparent' onClick={() => { setRegisterPasswordIconShow(false); setRegisterPasswordField(false) }} > <i className="fa fa-eye-slash " aria-hidden="true"></i> </button>

                                        }
                                        {
                                            !registerpasswordiconshow && <button className='loginpasswordicon transparent' onClick={() => { setRegisterPasswordIconShow(true); setRegisterPasswordField(true) }} > <i className="fa fa-eye " aria-hidden="true"></i> </button>

                                        }
                                    </div>
                                    {
                                        register && signuppw.trim() === '' && <p className='text-danger text-start p1' >Please Enter Password </p>

                                    }
                                    <div className='loginpasswordinput' >
                                        <input type={confirmpasswordfield ? "text" : "password"} className='text input' value={cnpw} onChange={(e) => { setCnpw(e.target.value); setConfirmError(false) }} name="name" id="cnpassword"
                                            required placeholder="Confirm password" />
                                        {
                                            confirmpasswordiconshow && <button className='loginpasswordicon transparent' onClick={() => { setConfirmPasswordIconShow(false); setConfirmPasswordField(false) }} > <i className="fa fa-eye-slash " aria-hidden="true"></i> </button>

                                        }
                                        {
                                            !confirmpasswordiconshow && <button className='loginpasswordicon transparent' onClick={() => { setConfirmPasswordIconShow(true); setConfirmPasswordField(true) }} > <i className="fa fa-eye " aria-hidden="true"></i> </button>

                                        }
                                    </div>
                                    {/* <p className='text-danger ' > {errors.cnp} </p> */}
                                    {
                                        register && cnpw.trim() === '' && <p className='text-danger text-start p1' >Please Confirm Password </p>

                                    }
                                    {
                                        confirmError && signuppw.trim() !== '' && cnpw.trim() !== '' && <p className='text-danger text-start p1' >Password Not Match </p>

                                    }


                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" onClick={() => { signUp(); }} className="btn signup" id="signupbtn">
                                        Sign up
                                    </button>

                                    {modalshow &&
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
                                                        <button type="button" onClick={() => { toggleShow(); setAuth4(false); clearInput(); modalShowToggle() }} className="btn btn-primary " id="sucreg"
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