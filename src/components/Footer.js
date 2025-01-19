import React from "react";
import { FaHome, FaUserFriends, FaBriefcase, FaCompass, FaAddressBook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 flex justify-around py-4 fixed bottom-0 w-full text-white">
      <button className="flex flex-col items-center">
        <FaHome className="text-2xl text-light-blue" />
        <span className="text-sm">Home</span>
      </button>
      <button className="flex flex-col items-center">
        <FaUserFriends className="text-2xl" />
        <span className="text-sm">About</span>
      </button>
      <button className="flex flex-col items-center">
        <FaBriefcase className="text-2xl" />
        <span className="text-sm">Portfolio</span>
      </button>
      <button className="flex flex-col items-center">
        <FaCompass className="text-2xl" />
        <span className="text-sm">Explore</span>
      </button>
      <button className="flex flex-col items-center">
        <FaAddressBook className="text-2xl" />
        <span className="text-sm">Contact</span>
      </button>
    </div>
  );
};

export default Footer;