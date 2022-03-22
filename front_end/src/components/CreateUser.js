import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import UserServices from "../services/userServices";

const CreateUSer =()=>{

    let navigate = useNavigate(); 
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");

    const firstNameHandler = (e)=>{
        setFirstName(e.target.value);
    }
    const lastNameHandler = (e)=>{
        setLastName(e.target.value);
    }
    const emailHandler = (e)=>{
        setEmail(e.target.value);
    }
    const save=(e)=>{
       e.preventDefault();
       let userData = {
        firstName:firstName,
        lastName:lastName,
        email:email
       }
       console.log(userData);
     UserServices.createUser(userData).then((res)=>{
        navigate('/user');
     }).catch((error)=>{
         console.log('error on CreateUSER====>',error);
     })

    }
    const lastPage=()=>{
        navigate('/User');
    }

    return(
        <>
            <div className="container">
               <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                       <h3>Add User</h3>
                       <div className="card-body">
                            <form>
                               <div className="form-group">
                                    <label>First Name:</label>
                                    <input placeholder="First Name" name="firstName" className="form-control" 
                                        value={firstName} onChange={firstNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input placeholder="Last Name" name="lastName" className="form-control" 
                                    value={lastName} onChange={lastNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input placeholder="Email" name="email" className="form-control" 
                                        value={email} onChange={emailHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={save}>Save</button>
                                <button className="btn btn-danger" onClick={lastPage}>Return</button>
                            </form>
                       </div>
                    </div>
               </div>
            </div>
        </>
    );
}
export default CreateUSer