import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./firebase/firebaseConfig.js";
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userInfo = {
    user,
    setLoading,
    loading,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
