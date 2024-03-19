import { Link } from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";
import { MdSlowMotionVideo } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
const SmNav = () => {
  return (
    <div
      className="w-full h-14 bg-transparent flex items-center justify-center fixed bottom-4
     "
    >
      <ul className=" w-80 h-full px-8 rounded-3xl flex bg-cyan-500  items-center justify-between md:w-96 lg:hidden    =">
        <li>
          {" "}
          <Link to={"/"}>
            {" "}
            <RiMenu4Fill />{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/"}>
            {" "}
            <MdSlowMotionVideo />{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/addblog"}>
            {" "}
            <IoAddCircleOutline />{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/"}>
            {" "}
            <FaRegBell />{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/"}>
            {" "}
            <FaCircleUser />{" "}
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default SmNav;
