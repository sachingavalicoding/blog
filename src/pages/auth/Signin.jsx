import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className=" h-auto w-96 flex flex-col items-center px-6 py-6 gap-3 bg-gray-900 rounded-2xl">
        <h2 className="text-3xl mb-4 text-white font-bold ">
          {" "}
          Login in to Account{" "}
        </h2>

        <input
          className="px-3  w-full text-white py-2 border-2 border-blue-700 outline-2 bg-black rounded-lg"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="px-3 w-full  text-white py-2 border-2 border-blue-700 outline-2 bg-black rounded-lg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          min={8}
        />
        <button
          className=" text-white max-w-fit px-4 py-1 mt-4 bg-blue-500 rounded-md hover:bg-blue-400 duration-300 outline-2 font-medium "
          onClick={handleSubmit}
        >
          {" "}
          Sign in{" "}
        </button>
      </div>
    </div>
  );
};

export default Signin;
