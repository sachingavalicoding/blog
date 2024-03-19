import { IoMdSearch } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import avatar from "/assets/avatar1.jpg";
const Navbar = () => {
  return (
    <nav className="w-full py-2 shadow-lg flex items-center justify-around">
      <h1 className="font-bold text-[1rem] md:text-2xl"> AMol Blogs </h1>
      <div>
        <div className="w-64 relative flex items-center top-0 md:w-96 ">
          <input
            className="w-full px-10 py-3 bg-slate-50 "
            type="search"
            placeholder="Search Blogs ... "
          />
          <IoMdSearch className="text-xl absolute  left-2" />
        </div>
      </div>
      <div className="hidden md:flex items-center gap-12">
        <FaRegCommentDots className="text-xl font-bold" />
        <GoBell className="text-xl font-bold" />
        <img className="w-14 h-14 rounded-full" src={avatar} alt="avtar" />
      </div>
    </nav>
  );
};

export default Navbar;
