import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {

    const auth=getAuth(app);

    const [loading,setLoading]=useState(true);

    const [user,setUser]=useState([]);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInuser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const authInfo={
        user,
        loading,
        createUser,
        signInuser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;