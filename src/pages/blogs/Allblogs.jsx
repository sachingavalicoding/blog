import { useBlog } from "../../context/BlogContext";
const Allblogs = () => {
  const { blogs, loading } = useBlog();

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-72">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-14 w-14"></div>
        <p className="ml-2">Loading...</p>
      </div>
    );
  }
  return <div>
    {
        blogs.map((post) => {
          
        })
    }
  </div>;
};

export default Allblogs;
