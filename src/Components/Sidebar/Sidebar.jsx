import React from 'react';
import { NavLink } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {

    const navigate = useNavigate();

    function logOut() {
        localStorage.removeItem("userToken")
        navigate("/login")
    }


    return (
        <>
            <nav className=''>
                <div className='fixed-top bg-dark min-vh-100 overflow-hidden pt-2' style={{ width: "220px" }}>
                    <NavLink className='py-3 d-flex mb-3' to={"/home"}>
                        <div className='text-center d-flex align-items-center'>
                            <img src={require("../Assets/notesInfo.png")} width={"50%"} className='ms-3' alt="" />
                            <i className=' fa-regular fa-note-sticky text-info fs-1 ms-3'></i>
                        </div>
                    </NavLink>
                    <ul className='p-0'>
                        <NavLink className='li-bg fs-5 text-white ps-3 p-2 mb-3'>
                            Home
                        </NavLink>
                        <NavLink className='li-bg fs-5 text-white ps-3 p-2' onClick={logOut} >
                            Logout
                        </NavLink>
                    </ul>
                </div>
            </nav>


        </>
    )
}