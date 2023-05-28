
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

import './login.css';
function Login(p) {
    // console.log(p)
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


    const history = useNavigate()

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
        if (signinpt.trim() == '') {
            console.log('enter value')
        }else if (signuppw.trim() == cnpw.trim()) {
            setStoredvalue([...storedvalue, { fname: signinpt, pw: signuppw }])
     
            modalShowToggle()
            setError((errors) => ({ ...errors, cnp: '' }))

        }
        else {
            setError((errors) => ({ ...errors, cnp: 'Password Not Match' }))

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
        if (un.trim() == '') {
            setError((errors) => ({ ...errors, une: 'Enter user Name' }))
            // errors.une = 'Enter user Name'

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
                } else {
                    setAuth4(!auth4)
                    // console.log("auth3 not true")

                }
            });
        }      
    }


    return (
        <>
            <div  className="bodydiv">

                {!formshow && <div className=" form__show" id="loginid">
                    <h1 className='h1'>Login Page</h1>
                    <div className='container'>
                    <div className='row d-flex justify-content-center p-3'>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-6 divc  " id="loginnerdiv">
                        <form action="" id="form" className='form' >
                            <label className="lab label" htmlFor="yname"> <input type="text" className='text input' value={un} onChange={(e) => { setUn(e.target.value) }} name="name" id="yname" required
                                placeholder="Enter user name" /></label>
                            <p className='text-danger text-start p1' > {errors.une} </p>
                            <label className="lab label" htmlFor="password"> <input type="text" className='text input' value={pw} onChange={(e) => { setPw(e.target.value) }} name="name" id="password"
                                required placeholder="Enter your password" /></label>
                            <p className='text-danger text-start p1' > {errors.pwe} </p>

                            <input type="submit" className='submit input' onClick={(e) => { subFun(e) }} name="submit" id="sub" value="Login" />
                     
                       
                        </form>
                        {auth4 && <>
                            <p className='text-danger text-center mt-2' >  check
                            your user name & password </p>
                            <h4 className='text-dark text-center' >or</h4>
                        </>    
                        }
                        <div className='text-center'>
                        <button onClick={() => { toggleShow() }} id="errorloginbutton" className="btn btn-info w-80 mt-3 text-white p-1 "> Register here  </button>

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
                    <div className="col-12 col-sm-8 col-md-6 col-lg-6 divc  " id="loginnerdiv">
                        <form action="" id="form2" className='form'>
                            <label className="lab label" htmlFor="yname2"> <input type="text" className='text input' value={signinpt} onChange={(e) => { setSigninpt(e.target.value) }} name="name" id="yname2" required
                                placeholder="Enter user name" /></label>
                            <label className="lab label" htmlFor="password2"> <input type="text" className='text input' value={signuppw} onChange={(e) => { setSignuppw(e.target.value) }} name="name" id="password2"
                                required placeholder="Enter your password" /></label>
                            <label className="lab label" htmlFor="cnpassword"> <input type="text" className='text input' value={cnpw} onChange={(e) => { setCnpw(e.target.value) }} name="name" id="cnpassword"
                                required placeholder="Confirm password" /></label>
                            <p className='text-danger ' > {errors.cnp} </p>
                        
                            

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