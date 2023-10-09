import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";
const Provider = new GoogleAuthProvider()
import PropTypes from 'prop-types';

export const authContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LoginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, Provider)
    }

    const Logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscrive = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscrive
        }
    },[])

    const AuthInfo = {
        user,
        createUser,
        LoginUser,
        Logout,
        LoginWithGoogle
    }

    return (
        <authContext.Provider value={AuthInfo}>
            {children}
        </authContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;