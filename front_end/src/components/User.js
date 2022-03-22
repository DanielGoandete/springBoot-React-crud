import React, { useEffect,useState } from "react";
import UserServices from "../services/userServices";
import { useNavigate } from 'react-router-dom';
import ButtonUpdateDelete from "./ButtonUpdateDelete";




const User =()=>{

   let navigate = useNavigate(); 
   const [users,setUsers] = useState([]);

 

   useEffect(()=>{
    UserServices.getUsers().then((response)=>{
       setUsers(response.data);
    });
   },[])

   const addUser=()=>{
    navigate('/addUSer');
   }

 

    return (
        <>
             <h1 className="text-center">Users List </h1>
             <div className="row">
                <button className="btn btn-primary AddUserbutton" onClick={addUser}>add User</button>
             </div>
             <div className="row">
                <table className="table table-striped">
                <thead>
                <tr>
                    <td>User First Name</td>
                    <td>User Last Name</td>
                    <td>User Email</td>
                </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) =>{
                        
                            return(
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td><ButtonUpdateDelete idUser={user.id}></ButtonUpdateDelete></td>
                                </tr>
                            )
                            })
                        }  
                    </tbody>
                </table>
             </div>
        </>
    )


}
export default User
