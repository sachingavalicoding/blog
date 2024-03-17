// BlogContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { databases } from "../server/appwrite";
import config from "../config/config";

const BlogContext = createContext();

// eslint-disable-next-line react/prop-types
const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      // Replace 'YOUR_COLLECTION_ID' with the actual collection ID where your blogs are stored in Appwrite
      const documents = await databases.listDocuments(
        config.databaseId,
        config.collectionId
      );

      setBlogs(documents.documents);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // useEffect to fetch blogs when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, loading }}>
      {children}
    </BlogContext.Provider>
  );
};

const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { BlogProvider, useBlog };
