
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({ label, type = "text", placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Label */}
      <label className="text-sm font-medium text-gray-700">{label}</label>

      {/* Input Wrapper */}
      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Password Toggle */}
        {isPassword && (
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
