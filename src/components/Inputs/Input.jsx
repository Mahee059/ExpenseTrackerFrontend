import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, placeholder, label, type }) => {
    const [showPassword, setPassword] = useState(false); 
    const toggleShowPassword = () => { 
        setPassword(!showPassword);
    }

    return ( 
        <div> 
            <label className="text-[13px] text-slate-800">{label}</label>  
            <div className="input box relative flex items-center">  
                <input 
                    type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none"
                    value={value}
                    onChange={(e) => onChange(e)} 
                /> 

                {type === "password" && ( 
                    
                    <div className="absolute right-2">
                        {showPassword ? (
                            <FaRegEyeSlash
                                size={22}
                                className="text-primary cursor-pointer"
                                onClick={toggleShowPassword}
                            /> 
                        ) : (
                            <FaRegEye
                                size={22}
                                className="text-primary cursor-pointer"
                                onClick={toggleShowPassword}
                            />
                            )}
                            
                    </div>
                )}
            </div>
        </div>
    )
}

export default Input;
