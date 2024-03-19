import { Navbar, RightBar, Sidebar } from "../../Components/index";
import SmNav from "../../components/nav/SmNav";
import { useBlog } from "../../context/BlogContext";
import CreatePost from "./CreatePost";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import { FaCommentDots } from "react-icons/fa";
import { IoShareSocialSharp, IoCameraOutline } from "react-icons/io5";
import { CiFaceSmile } from "react-icons/ci";
import { Link } from "react-router-dom";
const HomeLayout = () => {
  const { blogs, loading } = useBlog();

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-72">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-14 w-14"></div>
        <p className="ml-2">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen ">
      <Navbar />
      <SmNav />
      <main className="w-full px-2 py-2 flex items-center justify-between ">
        <Sidebar />
        <div className=" mx-auto w-full lg:w-[35rem] xl:w-[50rem]">
          <CreatePost />
          <ul className="w-full px-2 lg:px-8 py-2 gap-8 flex flex-col mt-5 bg-slate-50 rounded-lg">
            {blogs.map((blog) => (
              <li className="shadow-lg bg-slate-200 px-3 py-2" key={blog.$id}>
                <Link to={`/blogs/${blog.$id}`}>
                  <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex gap-4">
                      <img
                        className="w-12 h-12 rounded-full "
                        src="/assets/avatar2.jpg"
                        alt="post avtar"
                      />
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold"> {blog.author} </h3>
                        <p className="font-thin text-slate-600">
                          {" "}
                          2 hours ago{" "}
                        </p>
                      </div>
                    </div>
                    <BsThreeDotsVertical />
                  </div>
                  <p className=" text-[1rem] md:text-xl font-semibold mt-5 text-xl text-slate-700">
                    {" "}
                    {blog.title}{" "}
                  </p>
                  <div className="h-full lg:h-96 w-full px-2 py-1 my-4 rounded-lg ">
                    <img
                      className="w-full h-full  rounded-lg"
                      src={blog.image}
                      alt="postimage"
                    />
                  </div>
                  <div className="flex items-center justify-around flex-wrap gap-5 px-10 my-3 ">
                    <div className="flex items-center gap-7">
                      <div className="flex items-center gap-2">
                        <IoMdHeart className="text-red-500 text-2xl" />
                        <p> 1.2K </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCommentDots className="text-blue-500 text-xl" />
                        <p> 200 </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <IoShareSocialSharp className="text-yellow-500 text-2xl" />
                        <p> 17 </p>
                      </div>
                    </div>
                    <div className="flex items-center relative top-0">
                      <input
                        className="w-64 px-4 py-1"
                        type="text"
                        placeholder="Comment..."
                      />
                      <div className=" absolute right-2 flex items-center gap-2">
                        <IoCameraOutline className="text-blue-500 text-xl" />
                        <CiFaceSmile className="text-yellow-500 text- xl" />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <RightBar />
      </main>
    </div>
  );
};

export default HomeLayout;
