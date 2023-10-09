import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";


const NavBar = () => {

    const {Logout, user} = useContext(authContext)

    const handleLogout = () =>{
        Logout()
        .then(()=>{
            console.log('Logout Success!')
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    const NavLinks = <>
        <li className="ml-4"><NavLink to="/">HOME</NavLink></li>
        <li className="ml-4"><NavLink to="/contact">CONTACT</NavLink></li>
        <li className="ml-4"><NavLink to="/pricing">PRICING</NavLink></li>
        <li className="ml-4"><NavLink to="/profile">PROFILE</NavLink></li>
        {user?<li className="ml-4" onClick={handleLogout}><Link>LOGOUT</Link></li> :
        <li className="ml-4"><NavLink to="/login">LOGIN/REGISTER</NavLink></li>}
        
    </>

    return (
        <div className="navbar bg-white md:px-24 mx-auto shadow-lg sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <a className="md:text-4xl font-bold">EVENT<span className="text-primaryColor">WAY</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            {user&& <div className="navbar-end">
            {user && <p className="mr-2">{user.displayName}</p>}
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default NavBar;