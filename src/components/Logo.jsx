import React from "react";
import logoIcon from "../assets/images/logo-icon.png";

const Logo = ({ size = "text-4xl", color = "text-primary" }) => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logoIcon} alt="" className="h-[70px] w-auto" />
      <span className={`font-rammetto ${size} ${color}`}>
        TSpeak
      </span>
    </div>
  );
};

export default Logo;
