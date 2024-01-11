import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";


const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () =>{
        return signInWithGoogle(googleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log("current User"), currentUser;
            setLoading(false);
        })
        return () =>{
            return unsubscribe()
        }
    },[])

    const Info = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,

    }
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;