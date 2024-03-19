import IconBox from "../ui/IconBox";
import { RiHome2Fill } from "react-icons/ri";
import { FaUserFriends, FaRegStar, FaFlag } from "react-icons/fa";
import { MdGroups, MdSave, MdKeyboardArrowDown } from "react-icons/md";
import avatar1 from "/assets/avatar1.jpg";
import avatar2 from "/assets/avatar2.jpg";
import avatar3 from "/assets/avatar3.jpg";
import avatar4 from "/assets/avatar4.jpg";
import AvatarBox from "../ui/AvatarBox";
const Sidebar = () => {
  return (
    <div className=" hidden lg:grid w-64 min-h-screen  fixed top-[5rem] left-3  gap-2  px-2 py-2  ">
      <IconBox
        text1={<RiHome2Fill />}
        text2={"Home"}
        color={"text-blue-500"}
        bgColor={"bg-blue-200"}
      />
      <IconBox
        text1={<FaUserFriends />}
        text2={"Home"}
        color={"text-red-500"}
        bgColor={"bg-red-200"}
      />
      <IconBox
        text1={<MdGroups />}
        text2={"Home"}
        color={"text-orange-500"}
        bgColor={"bg-orange-200"}
      />
      <IconBox
        text1={<FaRegStar />}
        text2={"Home"}
        color={"text-indigo-500"}
        bgColor={"bg-indigo-200"}
      />
      <IconBox
        text1={<MdSave />}
        text2={"Home"}
        color={"text-green-500"}
        bgColor={"bg-green-200"}
      />
      <IconBox
        text1={<FaFlag />}
        text2={"Home"}
        color={"text-yellow-500"}
        bgColor={"bg-yellow-200"}
      />
      <p className="text-center flex items-center justify-center w-full gap-2 font-bold  mt-3">
        {" "}
        see more <MdKeyboardArrowDown className="text-2xl" />{" "}
      </p>

      <div className="grid ">
        <p className="text-center flex items-center justify-center w-full gap-2 font-bold  my-3">
          {" "}
          My Groups
        </p>
        <AvatarBox
          url={avatar1}
          text2={"Computer Science"}
          color={"text-slate-700"}
        />
        <AvatarBox
          url={avatar2}
          text2={"Programmers Fun "}
          color={"text-slate-700"}
        />
        <AvatarBox
          url={avatar3}
          text2={"Coding Era "}
          color={"text-slate-700"}
        />
        <AvatarBox
          url={avatar4}
          text2={"Web Development "}
          color={"text-slate-700"}
        />
      </div>
    </div>
  );
};

export default Sidebar;
