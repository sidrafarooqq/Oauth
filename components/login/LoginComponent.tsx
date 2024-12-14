"use client"; 

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
  const [message, setMessage] = useState("");

  const handleSignIn = async (provider: string) => {
    try {
      await signIn(provider);
      setMessage(`Signing in with ${provider}...`);
    } catch (err) {
      console.error("Sign in error:", err);
      setMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div>
    <div className="flex justify-center ">
      <div className=" text-center p-4 h-[500px] w-[400px] mt-24 rounded-xl bg-transparent border-2 divide-y-2 bg-slate-300 bg-opacity-30">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-black tracking-wide">
            Login
          </h1>

          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 mb-3 font-semibold bg-slate-300 text-gray-900 placeholder-gray-800 border border-slate-100 rounded focus:outline-none focus:ring-2 focus:ring-slate-100"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-3 font-semibold bg-slate-300 text-gray-900 placeholder-gray-800 border border-slate-100 rounded focus:outline-none focus:ring-2 focus:ring-slate-100"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-3 font-semibold bg-slate-300 text-gray-900 placeholder-gray-800 border border-slate-100 rounded focus:outline-none focus:ring-2 focus:ring-slate-100"
            />
            <p className="font-medium text-start text-lg">Forget Password?</p>
            <button className="bg-blue-900 text-white  hover:bg-white hover:text-blue-900 font-semibold flex flex-row justify-center gap-3 py-2 rounded mb-3 w-full">
              LOGIN
            </button>
          </form>
        </div>

        <div>
          <p className="font-medium text-start text-lg">Or login with:</p>
          <button
            onClick={() => handleSignIn("github")}
            className="bg-blue-900 text-white hover:bg-slate-700 hover:text-slate-300 font-semibold flex flex-row justify-center gap-3 py-2 rounded mb-3 mt-3 w-full"
          >
            <FaGithub size={28} />
            GitHub
          </button>

          <button
            onClick={() => handleSignIn("google")}
            className="bg-blue-900 text-white  hover:bg-white hover:text-blue-900 font-semibold flex flex-row justify-center gap-3 py-2 rounded w-full"
          >
            <FcGoogle size={28} />
            Google
          </button>

          {message && (
            <div className="mt-4 text-black font-semibold">{message}</div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}