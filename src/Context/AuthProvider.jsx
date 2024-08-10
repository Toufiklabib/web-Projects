import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.init';
import useAxiosPublic from '../hooks/useAxiosPublic';



export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return  signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () =>{
        setLoading(true);
       return signOut(auth);
    }
   const resetPass = (email) =>{
    setLoading(true);
       return sendPasswordResetEmail(auth,email)  ;
   }


   const userprofile =(name,photo) =>{
    console.log(photo);
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
     
   }

   const Verification = () =>{
    return sendEmailVerification(auth.currentUser);
   }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser)
                {
                const userInfo ={email: currentUser.email} 
                   axiosPublic.post('/jwt', userInfo )
                   .then(res =>{
                     if(res.data.token)
                        {
                            localStorage.setItem('access-token',res.data.token)
                            setLoading(false);
                        }
                       
                   })
                }
                else{
                    localStorage.removeItem('access-token')
                    setLoading(false);
                }  

           

        });

        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])







    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
        resetPass,
        userprofile,
        Verification
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;