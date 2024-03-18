// Home.js
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserData(userData);
    }
  }, []);
  const { logout } = useContext(AuthContext);
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      {userData ? (
        <div>
          <p>User ID: {userData.$id}</p>
          <p>Email: {userData.email}</p>
          <p>Name: {userData.name}</p>
          {/* Display other user data */}

          <button
            onClick={handleLogout}
            className="text-xl w-max bg-slate-950 text-white px-5 py-1 rounded-lg "
          >
            Logout
          </button>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Profile;
