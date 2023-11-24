import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../config/FirebaseConfig";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (context) {
        return context;
    } else {
        throw new Error("You need to use AuthProvider to consume auth context");
    }
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const signup = async (email, password, name) => {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {displayName: name})
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => signOut(auth);

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };
    
    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log({ currentUser });
            setUser(currentUser);
        });
        return () => unsubuscribe();
    }, []);

    return (
        <authContext.Provider
            value={{ user, signup, login, logout, resetPassword }}
        >
            {children}
        </authContext.Provider>
    );
}
