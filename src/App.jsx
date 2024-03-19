import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/home/Profile";
import AddBlog from "./pages/blogs/AddBlog";
import HomeLayout from "./pages/home/HomeLayout";
import BlogDetails from "./pages/blogs/BlogDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addblog" element={<AddBlog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
