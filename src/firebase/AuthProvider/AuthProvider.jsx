import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const signInUser = (email, pass) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, pass);
  }

  const createUserEmailPass = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);

  }



  const authInfo = {
    user,
    loading,
    createUserEmailPass,
    signInUser
  };


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
    });
    return () => {
        return unsubscribe();
    }
  },[])

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
