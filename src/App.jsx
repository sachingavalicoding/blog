import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import { UserProvider } from "./context/UserContext";
const App = () => {
  const isLoginPage = window.location.pathname === "/login";
  return (
    <div>
      <UserProvider>
        <main>{isLoginPage ? <Signup /> : <Home />}</main>
      </UserProvider>
    </div>
  );
};

export default App;
