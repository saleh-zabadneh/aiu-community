import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log(user);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && new Date().getTime() < storedUser.expiry) {
      setUser(storedUser);
    } else {
      localStorage.removeItem("user");
    }
  }, []);

  const login = (userData) => {
    const expiry = new Date().getTime() + 122 * 60 * 1000; // 3 minutes
    const userWithExpiry = { ...userData, expiry };
    localStorage.setItem("user", JSON.stringify(userWithExpiry));
    setUser(userWithExpiry);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
