import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { Link, useNavigate } from "react-router-dom";

function LogoutBtn() {
  const navigate=useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
        navigate("/");
        //window.location.reload();

    }
    
    
  return (
    <button
      className="inline-bock px-12 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      <Link
        to="/login"
        >
      </Link>
      Logout
    </button>
  );
}

export default LogoutBtn