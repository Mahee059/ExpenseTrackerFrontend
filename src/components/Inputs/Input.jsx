import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

/**
 * Reusable Input component with TailwindCSS styling and password visibility toggle
 * 
 * Props:
 *  - label: string → Label text above the input
 *  - type: string → Input type ("text", "password", "email", etc.)
 *  - placeholder: string → Placeholder text inside input
 *  - value: string → Controlled input value
 *  - onChange: function → Handles input changes
 */
const Input = ({ label, type = "text", placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      {/* Input Field */}
      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />

        {/* Password Eye Icon */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer focus:outline-none"
          >
            {showPassword ? (
              <FaRegEyeSlash size={18} />
            ) : (
              <FaRegEye size={18} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
