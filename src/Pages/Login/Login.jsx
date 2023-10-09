import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { LoginUser, LoginWithGoogle } = useContext(authContext)

    const naviget = useNavigate()

    const handleLogin = e => {
        e.preventDefault()

        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        LoginUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast("User Successfully Login! its auto redirect after 5 second");
                setTimeout(() => {
                    naviget('/');
                }, 5000);
            })
            .catch(error => {
                toast(error.message);
            })
    }

    const handleGoogleLogin = () => {
        LoginWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user)
                toast("User Successfully register! its auto redirect after 5 second");
                setTimeout(() => {
                    naviget('/');
                }, 5000);
            })
            .catch(error => {
                toast(error.message);
            })
    }
    return (
        <div className="hero min-h-screen h-3/4 bg-base-200">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                <h1 className="text-center text-2xl font-bold mt-4">Please Login</h1>
                <a onClick={handleGoogleLogin} className="flex items-center text-white mt-4 p-2 rounded-md text-2xl gap-2 justify-center mx-auto text-center bg-primaryColor">
                    LOGIN WITH<FaGoogle className="text-blue-500"></FaGoogle>
                </a>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-primaryColor text-white hover:text-textColor">Login</button>
                    </div>
                    <p>Do not have accounts? <Link className="text-blue-600" to='/register'>Register</Link></p>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}


export default Login;