
import React from 'react';
import card2 from "../../assets/images/card2.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
        {children}
      </div>

      {/* Image only visible on medium+ screens */}
      <div className="hidden md:block w-[40vw] h-screen bg-violent-50 bg-auth-img bg-cover bg-no-repeat overflow-hidden p-8 relative">
        <img src={card2} alt="Card Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default AuthLayout;



