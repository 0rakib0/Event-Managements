import { NavLink } from "react-router-dom";


const NavBar = () => {

    const NavLinks = <>
        <li className="ml-4"><NavLink to="/">HOME</NavLink></li>
        <li className="ml-4"><NavLink to="/contact">CONTACT</NavLink></li>
        <li className="ml-4"><NavLink to="/about">ABOUT</NavLink></li>
        <li className="ml-4"><NavLink to="/profile">PROFILE</NavLink></li>
        <li className="ml-4"><NavLink to="/login">LOGIN</NavLink></li>
        
    </>

    return (
        <div className="navbar px-24 mx-auto shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-4xl font-bold">EVENTWAY</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMD8-82Wl0-K0OqE4ZIy-mo06ia3_EULiO2uJdViNmsAKq4AeOrU6OfX2pwWoqWW2p6M&usqp=CAU" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;