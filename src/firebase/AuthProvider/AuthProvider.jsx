import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

  const logOut = () =>{
    return signOut(auth);
  }


  const authInfo = {
    user,
    loading,
    createUserEmailPass,
    signInUser,
    logOut
  };


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        // console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
        if (currentUser.email) {
          const logedInUser = {
            email: currentUser.email
          }
          fetch("http://localhost:5000/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(logedInUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("JWT RESPONSE", data);
              localStorage.setItem("car-access-token", data.token);
            });

        }
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
