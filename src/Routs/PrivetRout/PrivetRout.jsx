import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; 
import { authContext } from "../../AuthProvider/AuthProvider";


const PrivetRout = ( {children} ) => {
    const {user, loading} = useContext(authContext)
    if(loading){
        return <span className="loading loading-bars loading-lg mt-44 mb-44 ml-44"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

PrivetRout.propTypes = {
    children: PropTypes.object
}

export default PrivetRout;