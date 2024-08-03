import React from "react";
import { SidebarItemData } from "../schema/sidebar";
import { Link, useLocation } from "react-router-dom";

const SidebarItem: React.FC<SidebarItemData> = ({
  icon,
  text,
  onClick,
  path,
  isOpen,
}) => {
  const location = useLocation();

  const isActive = location.pathname === path;

  return (
    <li
      className={`flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
        isActive
          ? "bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-800"
          : "hover:bg-blue-50 text-gray-600"
      }`}
      onClick={onClick}
    >
      <Link
        to={path}
        className="flex items-center w-full"
        onClick={(e) => {
          if (isActive) e.preventDefault();
        }}
      >
        {icon}
        <span
          className={`${
            isOpen ? "ml-3 block" : "hidden"
          }`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
};

export default SidebarItem;
