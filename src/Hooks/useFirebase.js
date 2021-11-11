import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = (history, location) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        history.push(location.state?.from || "/home");
        setError({});
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const handleEmailPasswordRegister = (
    email,
    password,
    name,
    history,
    location
  ) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUserName(name);
        const LoginUser = result.user;
        setUser(LoginUser);
        history.push(location.state?.from || "/home");
        setError({});
      })
      .catch((e) => {
        console.log(e);
        setError({ email: "User already exits this email" });
      })
      .finally(() => setLoading(false));
  };

  const handleEmailPasswordLogin = (email, password, history, location) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        history.push(location.state?.from || "/home");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const setUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {})
      .catch((err) => console.log(err));
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, [auth]);

  return {
    user,
    setUser,
    handleGoogleSignIn,
    logOut,
    handleEmailPasswordRegister,
    setUserName,
    handleEmailPasswordLogin,
    loading,
    setLoading,
  };
};

export default useFirebase;
