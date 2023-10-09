import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; 
import { authContext } from "../../AuthProvider/AuthProvider";


const PrivetRout = ( {children} ) => {
    const {user} = useContext(authContext)
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

PrivetRout.propTypes = {
    children: PropTypes.object
}

export default PrivetRout;