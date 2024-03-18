// Home.js
import { useEffect, useState } from "react";

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserData(userData);
    }
  }, []);

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      {userData ? (
        <div>
          <p>User ID: {userData.$id}</p>
          <p>Email: {userData.email}</p>
          <p>Name: {userData.name}</p>
          {/* Display other user data */}
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Home;
