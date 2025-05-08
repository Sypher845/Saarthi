import React from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'

const UserLogout = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/logout` ,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((response)=>{
        if(response.status === 200){
            localStorage.removeItem("token")
            navigate("/login")
        }
    })

    return (
        <>
        <div>Lodu hain tu</div>
        </>
    )
}

export default UserLogout