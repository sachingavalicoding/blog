// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
  return (
    <button
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-500
                       text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out"
    >
      {text}
    </button>
  );
};

export default Button;
