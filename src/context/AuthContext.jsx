import { useState, createContext } from "react";
import AuthService from "../appwrite/service/AuthService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const login = async (email, password) => {
    setLoading(true);
    try {
      await AuthService.loginWithEmail(email, password);
      const currentUser = await AuthService.getCurrentUser();
      setUser(currentUser);
      localStorage.setItem("user", JSON.stringify(currentUser));
      navigate("/");
    } catch (error) {
      alert("Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  const register = async (userid, email, password, name) => {
    setLoading(true);
    try {
      await AuthService.register(userid, email, password, name);
      const currentUser = await AuthService.getCurrentUser(userid);
      setUser(currentUser);
      console.log(userid);
      navigate("/signin");
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await AuthService.logout();
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
