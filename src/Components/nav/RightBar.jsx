import avatar1 from "/assets/avatar1.jpg";
import avatar2 from "/assets/avatar2.jpg";
import avatar3 from "/assets/avatar3.jpg";
import avatar4 from "/assets/avatar4.jpg";
import AvatarBox from "../ui/AvatarBox";
const RightBar = () => {
  return (
    <div className="hidden lg:flex w-64 min-h-screen  fixed top-[5rem] right-4  flex-col gap-5  px-2 py-2  ">
      <div className="flex flex-col gap-3">
        <p className="text-center flex items-center justify-center w-full gap-2 font-bold ">
          {" "}
          Latest Activity
        </p>
        <AvatarBox
          className="font-thin"
          url={avatar2}
          text2={"Recent Add Javascript Blog "}
        />
        <AvatarBox
          className="font-thin"
          url={avatar4}
          text2={"Update Testing Blog   "}
        />
      </div>

      <div className="grid gap-2">
        <p className=" text-left flex items-center justify-center w-full gap-2 font-bold  ">
          {" "}
          Active Friends
        </p>
        <AvatarBox
          url={avatar1}
          text2={"Sachin Gavali "}
          color={"text-slate-700"}
        />
        <AvatarBox
          url={avatar2}
          text2={"Sachin Gavali "}
          color={"text-slate-700"}
        />
        <AvatarBox
          url={avatar3}
          text2={"Sachin Gavali "}
          color={"text-slate-700"}
        />
        <AvatarBox
          url={avatar4}
          text2={"Sachin Gavali "}
          color={"text-slate-700"}
        />
        <AvatarBox
          url={avatar1}
          text2={"Sachin Gavali "}
          color={"text-slate-700"}
        />
        <AvatarBox
          url={avatar1}
          text2={"Sachin Gavali "}
          color={"text-slate-700"}
        />
        <AvatarBox
          url={avatar1}
          text2={"Sachin Gavali "}
          color={"text-slate-700"}
        />
      </div>
    </div>
  );
};

export default RightBar;
