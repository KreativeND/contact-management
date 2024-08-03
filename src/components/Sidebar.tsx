import { LuBarChart3, LuUserCircle, LuMenu } from "react-icons/lu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const items = [
  { icon: <LuUserCircle size={20} />, text: "Contacts", path: "/contacts" },
  { icon: <LuBarChart3 size={20} />, text: "Charts", path: "/charts" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <aside
        className={`h-screen bg-white shadow-md border-r transition-transform duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-16"
        } lg:w-64`}
      >
        <nav className="h-full flex flex-col">
          <div className="p-4 pb-5 flex justify-between items-center border-b">
            <p className={`text-lg font-bold ${isOpen ? "block" : "hidden"}`}>
              Contact Management
            </p>
            <button
              className={`lg:hidden ${isOpen ? "p-4" : "p-0"} lg:"p-4"`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <LuMenu size={24} />
            </button>
          </div>

          <ul className="flex-1 px-3">
            {items.map((item) => (
              <SidebarItem
                key={item.text}
                icon={item.icon}
                text={item.text}
                onClick={() => handleItemClick(item.path)}
                path={item.path}
                isOpen={isOpen}
              />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
