import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/home/Profile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
