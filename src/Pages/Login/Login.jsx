import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { LoginUser, LoginWithGoogle } = useContext(authContext)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const naviget = useNavigate()

    const handleLogin = e => {
        e.preventDefault()

        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        setSuccess('')
        setError('')
        LoginUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                naviget('/')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogleLogin = () =>{
        LoginWithGoogle()
        .then(result =>{
            const user = result.user
            console.log(user)
            naviget('/')
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    return (
        <div className="hero min-h-screen h-3/4 bg-base-200">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                <h1 className="text-center text-2xl font-bold mt-4">Please Login</h1>
                <a onClick={handleGoogleLogin} className="flex items-center text-white mt-4 p-2 rounded-md text-2xl gap-2 justify-center mx-auto text-center bg-primaryColor">
                    LOGIN WITH<FaGoogle className="text-blue-500"></FaGoogle>
                </a>
                {success && <p className="p-x-4 text-green-500 text-center">{success}</p>}
                {error && <p className="p-4 text-red-600 text-center">{error}</p>}
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Do not have accounts? <Link className="text-blue-600" to='/register'>Register</Link></p>
                </form>
            </div>
        </div>
    )
}


export default Login;