"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

export default function SignOutPage() {
  const [message, setMessage] = useState("");

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage("Successfully signed out!");
    } catch (err) {
      console.error("Sign out error:", err);
      setMessage("Error signing out. Please try again.");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-around text-center p-4 h-[250px] w-[400px] mt-24 rounded-xl bg-transparent border-2 bg-slate-200 bg-opacity-30">
      <h1 className="text-4xl font-bold mb-4 text-black tracking-wide">Sign Out</h1>
      <button 
        onClick={handleSignOut}
        className="bg-blue-900 text-white  hover:bg-white hover:text-blue-900 font-semibold flex flex-row justify-center gap-3 py-2 rounded w-full"
      >
        Sign Out
      </button>
      {message && (
        <div className="mt-4 text-black font-semibold">{message}</div>
      )}
      </div>
    </div>
  );
}