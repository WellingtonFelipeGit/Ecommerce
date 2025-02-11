import { useContext, useEffect } from "react";
import { UserInfoContext } from "../context/UserInfoContext";
import { signIn, signUp, getUser } from "../api/authService";
import { useNavigate } from "react-router-dom";
import { auth } from "../api/firebase";
export const useUserInfoContext = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    currentUser,
    setCurrentUser,
    currentUserName,
    setCurrentUserName,
    currentUserInfo,
    setCurrentUserInfo,
  } = useContext(UserInfoContext);

  const getUsername = (username) => {
    setUsername(username);
  };
  const getEmail = (email) => {
    setEmail(email);
  };
  const getPassword = (password) => {
    setPassword(password);
  };

  const navigate = useNavigate();

  const getSubmit = async (e, currentPath) => {
    e.preventDefault();
    if (currentPath === "/login") {
      try {
        const user = await signIn(email, password);
        console.log("Usuario Logado:", user);
        setCurrentUser(user.uid);
        e.target.reset();
        setEmail("");
        setPassword("");
        navigate("/");
      } catch (error) {
        console.log("Erro a fazer login:", error.message);
      }
    } else {
      try {
        const user = await signUp(email, password, username);
        console.log("Usuario Cadastrado:", user);
        e.target.reset();
        setUsername("");
        setEmail("");
        setPassword("");
      } catch (error) {
        console.log("Erro a fazer login:", error.message);
      }
    }
  };

  const userInfo = async (value) => {
    const data = await getUser(value);
    setCurrentUserName(data.userName);
    setCurrentUserInfo(data.userInfo);
  };

  const logout = async () => {
    await auth.signOut();
    setCurrentUser("");
    setCurrentUserName("");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        userInfo(user.uid);
        setCurrentUser(user.uid);
      }
    });
  }, []);

  return {
    username,
    email,
    password,
    getSubmit,
    getUsername,
    getEmail,
    getPassword,
    currentUser,
    logout,
    userInfo,
    currentUserName,
    currentUserInfo,
  };
};
