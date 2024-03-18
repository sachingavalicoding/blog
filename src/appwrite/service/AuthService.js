import { account } from "../appwrite";

const AuthService = {
  register: async (userid, email, password, name) => {
    try {
      await account.create(userid, email, password, name);
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  loginWithEmail: async (email, password) => {
    try {
      // Login user
      await account.createEmailSession(email, password);
      // Login successful
      return true;
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
      throw error;
    }
  },
  logout: async () => {
    try {
      // Delete the current session
      await account.deleteSession("current");
      // Logout successful
      return true;
    } catch (error) {
      // Handle logout error
      console.error("Logout error:", error);
      throw error;
    }
  },
  getCurrentUser: async (userid) => {
    try {
      // Get current user information
      const currentUser = await account.get(userid);
      return currentUser;
    } catch (error) {
      // Handle error getting current user
      console.error("Error getting current user:", error);
      throw error;
    }
  },
};

export default AuthService;
