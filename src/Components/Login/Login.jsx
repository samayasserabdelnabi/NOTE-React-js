import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik"
import axios from "axios"

export default function Login() {

const navigate = useNavigate();

    async function LoginNow(values) {
        try {
            let { data } = await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signIn`, values)
            localStorage.setItem("userToken" , data.token)
            navigate("/home")

        } catch (error) {

        }
    }

    const loginFormik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validate: function (values) {
            const errors = {};

            if (!values.email.includes("@") && (!values.email.includes("."))) {
                errors.email = "Enter a valid email."
            }
            if (values.password.length > 6 && values.password.length < 12) {
                errors.password = "Password must be at least 6 characters."
            }
            return errors;
        },

        onSubmit: LoginNow
    })


    return (
        <>
            <section className='bg-reg'>
                <li className='fixed-top d-flex w-100 me-auto ps-5' >
                    <div>
                        <img src={require("../Assets/notesBlack.png")} width={"50%"} alt="" />
                    </div>
                </li>
                <div className="container">
                    <div className="row">
                        <div className="ms-5 col-md-7">
                            <div className='min-vh-100 d-flex justify-content-center align-items-center'>
                                <div className='bg-secondary p-3 shadow shadow-lg rounded-2 bg-info-subtle' style={{ width: "65%" }}>
                                    <h2 className='text-center fw-bold rounded-2 my-4'>Login Now</h2>
                                    <form action="" onSubmit={loginFormik.handleSubmit} >
                                        <div className="form-floating mb-1">
                                            <input onBlur={loginFormik.handleBlur} onChange={loginFormik.handleChange} value={loginFormik.values.email} type="email" className="form-control " name="email" id="email" placeholder="Email" />
                                            <label htmlFor="email" className=''>Email</label>
                                            {loginFormik.errors.email && loginFormik.touched.email ? <div className='alert bg-danger-subtle mt-1 p-2 fw-bold text-danger'>{loginFormik.errors.email}</div> : ""}
                                        </div>
                                        <div className="form-floating mb-1">
                                            <input onBlur={loginFormik.handleBlur} onChange={loginFormik.handleChange} value={loginFormik.values.password} type="password" className="form-control " name="password" id="password" placeholder="Password" />
                                            <label htmlFor="password" className=''>Password</label>
                                            {loginFormik.errors.password && loginFormik.touched.password ? <div className='alert bg-danger-subtle mt-1 p-2 fw-bold text-danger'>{loginFormik.errors.password}</div> : ""}
                                        </div>
                                        <button type="submit" disabled = {loginFormik.isValid === false || loginFormik.dirty === false} className='fw-semibold text-black btn btn-info w-50 float-end mt-2 '>
                                            Login
                                        </button>
                                    </form>
                                    <div className='ms-2'>
                                        <p className='pt-2'>Don't have an account? <Link className='ms-1 text-decoration-underline fw-bold text-info rounded-2' to='/register'>Register</Link> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

