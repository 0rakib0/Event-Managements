import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const {createUser} = useContext(authContext)

    const naviget = useNavigate()
    const handleRegister = e =>{
        e.preventDefault()

        const form = new FormData(e.target)
        const email = form.get('email')
        const name = form.get('name')
        const photoUrl = form.get('profile-pic-url')
        const password = form.get('password')

        setError('')
        setSuccess('')

        
        var containsCapitalAndSpecial = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/.test(password);
        if(password.length < 6){
            setError('Password must be more then 6 charecter')
            return 
        }
        if(!containsCapitalAndSpecial){
            setError('At list one Capital latter and a special character Required!')
            return
        }
        createUser(email, password)
        .then(result =>{
            const user = result.user
            updateProfile(user, {
                displayName: name,
                photoURL: photoUrl
            })
            .then(()=>{

            })
            .catch(error =>{
                setError(error.message)
            })
            naviget('/')
        })
        .catch(error =>{
            setError(error.message)
        })
       
    }
    return (
        <div className="hero min-h-screen h-3/4 bg-base-200">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-center text-2xl font-bold mt-4">Please Register</h1>
                 {success && <p className="p-x-4 text-green-500 text-center">{success}</p>}
                 {error && <p className="p-4 text-red-600 text-center">{error}</p>}
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Full name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Profile Pic URL</span>
                        </label>
                        <input type="text" name="profile-pic-url" placeholder="Photo URL" className="input input-bordered" required />
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>QAlready have accounts? <Link className="text-blue-600" to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;