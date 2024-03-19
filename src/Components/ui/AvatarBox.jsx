// eslint-disable-next-line react/prop-types
const AvatarBox = ({ url, text2, color, className }) => {
  return (
    <>
      <div className="w-full bg-transparent px-4 rounded-lg py-1 flex items-center   duration-500 ease-linear gap-6  hover:bg-slate-300 cursor-pointer">
        <img className={`w-10 h-10 rounded-full`} src={url}></img>
        <p className={`${color} text-left font-medium ${className}`}>
          {" "}
          {text2}{" "}
        </p>
      </div>
    </>
  );
};

export default AvatarBox;
