import { createContext, useState } from "react";

export const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserInfo, setCurrentUserInfo] = useState("");

  return (
    <UserInfoContext.Provider
      value={{
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
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
