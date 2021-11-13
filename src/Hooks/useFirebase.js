import axios from "axios";
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
  const [databaseUser, setDatabaseUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = (history, location) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          uid: result.user.uid,
          photoUrl: result.user.photoURL,
        };
        saveGoogleUserToDatabase(newUser);
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
        const newUser = {
          name: name,
          email: result.user.email,
          uid: result.user.uid,
          photoUrl: result.user.photoURL,
        };
        saveUserToDatabase(newUser);
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

  const saveGoogleUserToDatabase = (user) => {
    const url = `https://safe-plateau-38626.herokuapp.com/api/users/createUser`;
    axios
      .put(url, user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const saveUserToDatabase = (user) => {
    const url = `https://safe-plateau-38626.herokuapp.com/api/users/createUser`;
    axios
      .post(url, user)
      .then((res) => console.log(res.data))
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

  useEffect(() => {
    setLoading(true);
    if (user) {
      axios
        .get(`https://safe-plateau-38626.herokuapp.com/api/users/${user.uid}`)
        .then((res) => {
          setDatabaseUser(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

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
    databaseUser,
  };
};

export default useFirebase;
