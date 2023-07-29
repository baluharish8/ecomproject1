import { useState } from "react"
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

    // const  { id, name }  = props.userData; // REFER NESTED DESTRUCTURE
    const { userData: { id, name, password } } = props;// THIS IS NESTED DESTRUCTURE
    console.log(id, name)
    // const {}=props.logoutInfo


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
                        setCurrentPasswordError(false)
                        navigate('/');

                    })
            }
            asyncArrowFunction()

        }
    }
    const handleDelete = () => {
        const asyncArrowFunction = async () => {
            await deleteData(id)
                .then((response) => {
                    console.log("deletedSuccessfully", response)
                    setCurrentPasswordError(false)
                    navigate('/');
                })
                .catch(error => {
                    console.log('Delete failed', error);
                });
        }
        asyncArrowFunction()
    }

    function updatePasswordCheck() {
        setCurrentPasswordError(true)
        if (currentPasswordInput == '') {
            console.log("Enter password")
        } else if (password !== currentPasswordInput.trim()) {
            console.log("Current password is wrong")
        } else if (newPassword.trim() == rePassword.trim()) {
            handleEdit()
        } else { console.log("Re-entered Password not match") }
    }
    const deleteCheck = () => {
        setCurrentPasswordError(true)
        if (deletePasswordCheck.trim() == '') {
            console.log("Enter input value")
        } else if (deletePasswordCheck == password) {
            handleDelete()
        } else {
            console.log("Password wrong")
        }
    }

    return (
        <>
            {/* <div className="text-center ">
                <div className="">
                    <div className=" d-flex justify-content-center  ">
                        <div className="w-75 " >
                            <input type="password" className="form-control" value={currentPasswordInput} onChange={(e)=>setCurrentPasswordInput(e.target.value)} ></input>
                            <p>{password}</p>
                            <button className="btn btn-warning mt-1" onClick={()=>handleEdit()} >Change Password</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-1">
                        <button className="btn btn-danger" onClick={()=>handleDelete()} >Delete Account</button>
                    </div>
                </div>

            </div> */}
            <div className="maindiv d-flex justify-content-center " >
                <div className="  mt-5">
                    <form  >
                        <h3>Change Password</h3>
                        <div className="mt-3 mb-3">
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
                                        <input type="password" className="form-control" id="exampleInputPassword1" value={currentPasswordInput} onChange={(e) => { setCurrentPasswordInput(e.target.value) }} />
                                        {
                                            currentPasswordError && currentPasswordInput.trim() === '' && <p className="text-danger">Enter password</p>
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
                                        <label htmlFor="exampleInputPassword3" className="form-label h6 ">Reenter new password:</label>
                                        <input type="password" className="form-control" id="exampleInputPassword3" value={rePassword} onChange={(e) => { setRePassword(e.target.value) }} />
                                        {
                                            currentPasswordError && rePassword.trim() === '' && <p className="text-danger">Re-Enter New password</p>
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
                                        <input type="password" className="form-control" id="exampleInputPassword4" value={deletePasswordCheck} onChange={(e) => setDeletePasswordCheck(e.target.value)} />
                                        {
                                            currentPasswordError && deletePasswordCheck.trim() === '' && <p className="text-danger">Enter password</p>
                                        }
                                    </div>
                                    <button type="button" className="btn btn-danger" onClick={() => { deleteCheck() }} >Delete Account</button>

                                </>
                            }
                        </div>
                        <div>

                            {
                                !changeDeleteButtonsShow && <div>
                                    <button type="button" className="btn btn-transparent border rounded p-3 w-100 passwordShowBtton " onClick={() => { props.setTrigger((trigger) => trigger + 1); }} >Logout</button>
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