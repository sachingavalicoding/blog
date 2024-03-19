import { useParams } from "react-router-dom";
import { useBlog } from "../../context/BlogContext";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import { FaCommentDots } from "react-icons/fa";
import { IoShareSocialSharp, IoCameraOutline } from "react-icons/io5";
import { CiFaceSmile } from "react-icons/ci";
const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useBlog();
  const selectedBlog = blogs.find((blog) => blog.$id === id);
  console.log(selectedBlog);
  if (!selectedBlog) {
    return <p>Blog not found</p>;
  }
  return (
    <ul className="w-full px-2 lg:px-8 py-2 gap-8 flex flex-col mt-5 bg-slate-200 rounded-lg">
      <li className="shadow-lg bg-slate-200 px-3 py-2" key={selectedBlog.$id}>
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex gap-4">
            <img
              className="w-12 h-12 rounded-full "
              src="/assets/avatar2.jpg"
              alt="post avtar"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-bold"> {selectedBlog.author} </h3>
              <p className="font-thin text-slate-600"> 2 hours ago </p>
            </div>
          </div>
          <BsThreeDotsVertical />
        </div>
        <p className=" text-[1rem] md:text-xl font-semibold mt-5 text-xl text-slate-700">
          {" "}
          {selectedBlog.title}{" "}
        </p>
        <div className="h-full flex items-center justify-center w-full    px-2 py-1 my-4 rounded-lg ">
          <img
            className=" w-full h-full lg:h-[80vh] lg:w-[80vw] rounded-lg"
            src={selectedBlog.image}
            alt="postimage"
          />
        </div>
        <div className="flex items-center justify-center flex-wrap gap-5 px-10 my-3 ">
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
      </li>

      <div className="container mx-auto px-8 ">
        <h2 className="font-bold text-3xl my-2 py-3"> {selectedBlog.title} </h2>
        <p>{selectedBlog.content}</p>
      </div>
    </ul>
  );
};

export default BlogDetails;
