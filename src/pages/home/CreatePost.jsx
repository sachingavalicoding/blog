import IconBox from "../../components/ui/IconBox";
import { IoVideocam } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
import { FaSmileWink } from "react-icons/fa";
const CreatePost = () => {
  return (
    <div className="w-full  px-4 py-2 flex flex-col mt-5 bg-slate-50 rounded-lg">
      <div className="flex items-center gap-5 px-4 py-2 justify-center w-full">
        <img
          className="w-12 h-12 rounded-full "
          src="/assets/avatar1.jpg"
          alt="avtar"
        />
        <input
          className="w-[80%] px-6 py-2 bg-white rounded-xl"
          type="text"
          placeholder="Write Somthing here ..."
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between mt-6">
        <IconBox
          text1={<IoVideocam />}
          text2={"Go Live "}
          color={"text-red-500"}
          bgColor={"bg-red-200"}
        />
        <IconBox
          text1={<IoMdPhotos />}
          text2={"Photos"}
          color={"text-green-500"}
          bgColor={"bg-green-200"}
        />
        <IconBox
          text1={<MdVideoLibrary />}
          text2={"Video"}
          color={"text-orange-500"}
          bgColor={"bg-orange-200"}
          
        />
        <IconBox
          text1={<FaSmileWink />}
          text2={"Feeling"}
          color={"text-yellow-500"}
          bgColor={"bg-yellow-200"}
        />
      </div>
    </div>
  );
};

export default CreatePost;
