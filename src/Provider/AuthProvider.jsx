import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login User
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // Update Profile
  const updateProfile = () => {
    return updateProfile(auth.currentUser, {
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    });
  };
  // Email Verification
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  // password reset email
  const passwordResetMailSend = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  // Log Out
  const logOut = () => {
    return signOut(auth);
  };
  // SignIn with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {
    test: "Provider is On...",
    user,
    setUser,
    createUser,
    loginUser,
    verifyEmail,
    logOut,
    signInWithGoogle,
    updateProfile,
    passwordResetMailSend,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
