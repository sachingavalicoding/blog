// eslint-disable-next-line react/prop-types
const IconBox = ({ text1, text2, color, bgColor }) => {
  return (
    <div className="w-full bg-transparent px-2 rounded-lg py-1 flex items-center  justify-center duration-500 ease-linear gap-6  hover:bg-slate-300 cursor-pointer">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center  p-1 ${bgColor}  `}
      >
        <p className={`${color} text-xl`}>{text1}</p>
      </div>
      {text2}
    </div>
  );
};

export default IconBox;
