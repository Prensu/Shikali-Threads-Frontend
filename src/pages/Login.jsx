import { useContext, useState } from "react";
import axios from "axios";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

function Login() {
  const [currentState, setCurrentState] = useState("SIGN IN");
  const titleValue = currentState.split(" ");

  const { setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (!backendUrl) {
        throw new Error("Backend URL is not configured.");
      }
      const endpoint = currentState === "SIGN IN" ? "login" : "register";
      const payload =
        currentState === "SIGN IN"
          ? { email, password }
          : { name, email, password };

      const response = await axios.post(
        `${backendUrl}/api/user/${endpoint}`,
        payload,
      );

      if (response.data?.token) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 "
    >
      <div className="mb-4 text-4xl sm:text-5xl">
        <Title text1={titleValue[0]} text2={titleValue[1]} />
      </div>
      {currentState === "SIGN IN" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800 outline-none"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 outline-none"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 outline-none"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex justify-between w-full text-sm mt-[-8px]">
        <p className="border-b border-white cursor-pointer hover:border-black ">
          Forgot Your Password?
        </p>
        {currentState === "SIGN IN" ? (
          <p
            onClick={() => setCurrentState("SIGN UP")}
            className="border-b border-white cursor-pointer hover:border-black "
          >
            Don&apos;t have an account? Sign Up.
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("SIGN IN")}
            className="border-b border-white cursor-pointer hover:border-black "
          >
            Already have an account? Sign In.
          </p>
        )}
      </div>
      <button className="w-full py-3 mt-6 font-light text-white bg-black">
        {currentState === "SIGN IN" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;
