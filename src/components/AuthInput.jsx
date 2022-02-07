import React from "react";

const AuthInput = (props) => (
  <div className="relative">
    <input
      className="block w-full px-4 py-3 mb-4 border border-1 border-black border-opacity-50 rounded-0 focus:ring focus:ring-blue-500 focus:outline-none placeholder-black text-2xl"
      {...props}
    />
  </div>
);

export default AuthInput;
