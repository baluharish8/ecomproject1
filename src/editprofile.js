import { useEffect, useState } from "react"
import { deleteData, putData } from "./api"
import { useNavigate } from 'react-router-dom';
import './editprofile.css'
function EditProfiles(props) {
    const navigate = useNavigate();
    const [currentPasswordInput, setCurrentPasswordInput] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [deletePasswordCheck, setDeletePasswordCheck] = useState('')
    const [changeDeleteButtonsShow, setChangeDeleteButtonsShow] = useState(false)
    const [deleteDivShow, setDeleteDivShow] = useState(false)
    const [passwordDivShow2, setPasswordDivShow2] = useState(false)
    const [currentPasswordError, setCurrentPasswordError] = useState(false)
    const[passwordNotMatchError,setPasswordNotMatchError]=useState(false)
    const[rePasswordNotMatchError,setRePasswordNotMatchError]=useState(false)


    // const  { id, name }  = props.userData; // REFER NESTED DESTRUCTURE
    // const { userData: { id, name, password } } = props;// THIS IS NESTED DESTRUCTURE
    const { id, name, password } = props.userData;//ONLY DESTRUCTURE
    console.log(id, name)
    // const {}=props.logoutInfo

//edit API
    function handleEdit() {
        if (currentPasswordInput.trim) {
            let data = {
                name: name,
                password: newPassword
            }
            const asyncArrowFunction = async () => {
                await putData(id, data)
                    .then((response) => {
                        console.log("updatedSuccessfully", response)
                        const asyncFun = async () => {
                            await props.storingDataFun()
                            setCurrentPasswordError(false)
                            props.setUserData('')
                            props.setTrigger((trigger) => trigger + 1)
                            navigate('/');
                        }
                        asyncFun()
                    })
            }
            asyncArrowFunction()

        }
    }
    //delete API
    const handleDelete = () => {
        const asyncArrowFunction = async () => {
            await deleteData(id)
                .then((response) => {
                    console.log("deletedSuccessfully", response)
                    const asyncFun = async () => {
                        await props.storingDataFun()
                        setCurrentPasswordError(false)
                        props.setUserData('')
                        props.setTrigger((trigger) => trigger + 1)
                        navigate('/');
                    }
                    asyncFun()
                })
                .catch(error => {
                    console.log('Delete failed', error);
                });
        }
        asyncArrowFunction()
    }
 
//Logout
const handleLogout= async ()=>{
    await props.storingDataFun()
    setCurrentPasswordError(false)
    props.setUserData('')
    props.setTrigger((trigger) => trigger + 1)
    navigate('/');
}

    function updatePasswordCheck() {
        setCurrentPasswordError(true)
        if (currentPasswordInput == '') {
            console.log("Enter password")
        } else if (password !== currentPasswordInput.trim()) {
            setPasswordNotMatchError(true)
            console.log("Current password is wrong"+passwordNotMatchError)
        } else if (newPassword.trim() == rePassword.trim()) {
            handleEdit()
        } else { 
            setRePasswordNotMatchError(true)
            console.log("Re-entered Password not match")
         }
    }
    const deleteCheck = () => {
        setCurrentPasswordError(true)
        if (deletePasswordCheck.trim() == '') {
            console.log("Enter input value")
        } else if (deletePasswordCheck == password) {
            handleDelete()
        } else {
            setPasswordNotMatchError(true)
            console.log("Password wrong"+passwordNotMatchError)
        }
    }

    return (
        <>
      
            <div className="maindiv d-flex justify-content-center " >
                <div className="  mt-5">
                    <form  >
                        <h3>Account Details</h3>
                        <div className="mt-5 mb-3">
                            {
                                !changeDeleteButtonsShow && <div>
                                    {/* <span class="border rounded-0 p-3">hdgahdg</span><br></br> */}
                                    <button type="button" className="btn btn-transparent border rounded p-3 w-100 passwordShowBtton " onClick={() => { setChangeDeleteButtonsShow(true); setPasswordDivShow2(true) }} >Change password</button>
                                </div>
                            }
                            {
                                passwordDivShow2 && <div className="boxsha"  >
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label h6 ">Current password:</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" value={currentPasswordInput} onChange={(e) => { setCurrentPasswordInput(e.target.value);setPasswordNotMatchError(false) }} />
                                        {
                                            currentPasswordError && currentPasswordInput.trim() === '' && <p className="text-danger">Enter password</p>
                                        }
                                         {
                                            passwordNotMatchError && currentPasswordInput.trim() !== '' && <p className="text-danger">Current password not match</p>
                                        }
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword2" className="form-label h6 ">New password:</label>
                                        <input type="password" className="form-control" id="exampleInputPassword2" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                        {
                                            currentPasswordError && newPassword.trim() === '' && <p className="text-danger">Enter New password</p>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword3" className="form-label h6 ">ReEnter new password:</label>
                                        <input type="password" className="form-control" id="exampleInputPassword3" value={rePassword} onChange={(e) => { setRePassword(e.target.value);setRePasswordNotMatchError(false) }} />
                                        {
                                            currentPasswordError && rePassword.trim() === '' && <p className="text-danger">Re-Enter New password</p>
                                        }
                                          {
                                            rePasswordNotMatchError && currentPasswordInput.trim() !== '' && <p className="text-danger">Re-Entered password not match</p>
                                        }
                                    </div>
                                    <button type="button" className="btn btn-warning" onClick={() => { updatePasswordCheck() }} >Update password</button>
                                </div>
                            }
                        </div>

                        <div className="mt-3 mb-5">
                            {
                                !changeDeleteButtonsShow && <div>
                                    <button type="button" className="btn btn-transparent border rounded p-3 w-100 passwordShowBtton " onClick={() => { setChangeDeleteButtonsShow(true); setDeleteDivShow(true) }} >Delete Account</button>
                                </div>
                            }
                            {
                                deleteDivShow && <>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword4" className="form-label h6 ">Current password:</label>
                                        <input type="password" className="form-control" id="exampleInputPassword4" value={deletePasswordCheck} onChange={(e) => {setDeletePasswordCheck(e.target.value);setPasswordNotMatchError(false)}} />
                                        {
                                            currentPasswordError && deletePasswordCheck.trim() === '' && <p className="text-danger">Enter password</p>
                                        }
                                               {
                                            passwordNotMatchError && deletePasswordCheck.trim() !== '' && <p className="text-danger">Current password not match</p>
                                        }
                                    </div>
                                    <button type="button" className="btn btn-danger" onClick={() => { deleteCheck();  }} >Delete Account</button>
                             
                                </>
                            }
                        </div>
                        <div>
                            {
                                !changeDeleteButtonsShow && <div>
                                    <button type="button" className="btn btn-transparent border rounded p-3 w-100 passwordShowBtton " onClick={() => {handleLogout();  props.setUserData('') }} >Logout</button>
                                 
                                </div>
                            }
                        </div>
                    </form>
                </div>

            </div>



        </>
    )

}



export default EditProfiles