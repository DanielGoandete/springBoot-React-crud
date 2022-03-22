import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserServices from "../services/userServices";


 const ButtonUpdateDelete = ({idUser}) => {  
    let navigate = useNavigate(); 

    const updateUserById=()=>{
        navigate('/updateUser/'+idUser);
    }

    const deleteUser=()=>{
      UserServices.deleteUserById(idUser).then((res)=>{
        window.location.reload();
     }).catch((error)=>{
         console.log('error on CreateUSER====>',error);
     })
     }


    
    
    return (
    <>
        <button className='btn btn-info' onClick={updateUserById}>Update</button>
        <button className='btn btn-danger'onClick={deleteUser}>Delete</button>
    </>
  )
}
export default ButtonUpdateDelete
