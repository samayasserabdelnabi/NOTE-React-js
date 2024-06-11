import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik"
import axios from "axios"

export default function Register() {

    const navigate = useNavigate()

    async function registerNow(values) {
        try {
            let { data } = await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`, values)
            console.log(data);
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
    }

    const registerFormik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            age: "",
            phone: ""
        },

        validate: function (values) {
            const errors = {};
            if (values.name.length < 4) {
                errors.name = "Name must be more than 4 characters."
            }
            if (!values.email.includes("@") && (!values.email.includes("."))) {
                errors.email = "Enter a valid email."
            }
            if (values.password.length > 6 && values.password.length < 12) {
                errors.password = "Password must be at least 6 characters."
            }
            if (!values.age.match(/^[1-9][0-9]$/)) {
                errors.age = "Age must be above 10 years old."
            }
            if (!values.phone.match(/^01[0125][0-9]{8}$/)) {
                errors.phone = "Enter a valid mobile number."
            }
            return errors;
        },

        onSubmit: registerNow
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
                                    <h2 className='text-center fw-bold rounded-2 my-4'>Sign Up Now!</h2>
                                    <form action="" onSubmit={registerFormik.handleSubmit} >
                                        <div className="form-floating mb-1">
                                            <input onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} value={registerFormik.values.name} type="text" className="form-control " name="name" id="name" placeholder="Name" />
                                            <label htmlFor="name" className=''>Name</label>
                                            {registerFormik.errors.name && registerFormik.touched.name ? <div className='alert bg-danger-subtle mt-1 p-2 fw-bold text-danger'>{registerFormik.errors.name}</div> : ""}
                                        </div>
                                        <div className="form-floating mb-1">
                                            <input onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} value={registerFormik.values.email} type="email" className="form-control " name="email" id="email" placeholder="Email" />
                                            <label htmlFor="email" className=''>Email</label>
                                            {registerFormik.errors.email && registerFormik.touched.email ? <div className='alert bg-danger-subtle mt-1 p-2 fw-bold text-danger'>{registerFormik.errors.email}</div> : ""}
                                        </div>
                                        <div className="form-floating mb-1">
                                            <input onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} value={registerFormik.values.password} type="password" className="form-control " name="password" id="password" placeholder="Password" />
                                            <label htmlFor="password" className=''>Password</label>
                                            {registerFormik.errors.password && registerFormik.touched.password ? <div className='alert bg-danger-subtle mt-1 p-2 fw-bold text-danger'>{registerFormik.errors.password}</div> : ""}
                                        </div>
                                        <div className="form-floating mb-1">
                                            <input onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} value={registerFormik.values.age} type="num" className="form-control " name="age" id="age" placeholder="Age" />
                                            <label htmlFor="age" className=''>Age</label>
                                            {registerFormik.errors.age && registerFormik.touched.age ? <div className='alert bg-danger-subtle mt-1 p-2 fw-bold text-danger'>{registerFormik.errors.age}</div> : ""}
                                        </div>
                                        <div className="form-floating mb-1">
                                            <input onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} value={registerFormik.values.phone} type="tel" className="form-control " name="phone" id="phone" placeholder="Phone" />
                                            <label htmlFor="phone" className=''>Phone</label>
                                            {registerFormik.errors.phone && registerFormik.touched.phone ? <div className='alert bg-danger-subtle mt-1 p-2 fw-bold text-danger'>{registerFormik.errors.phone}</div> : ""}
                                        </div>
                                        <button type="submit" disabled={registerFormik.isValid === false || registerFormik.dirty === false} className='fw-semibold text-black btn btn-info w-50 float-end mt-2 '>
                                            Register
                                        </button>
                                    </form>
                                    <div className='ms-2'>
                                        <p className='pt-2'>Have already an account? <Link className='ms-1 text-decoration-underline fw-bold text-info rounded-2' to='/login'>Login</Link> </p>
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
