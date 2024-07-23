import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import { cn } from "../../../utils";

const Sidebar = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: <GoHome size="24" />, to: "/" },
    { id: "favorite", icon: <MdFavoriteBorder size="24" />, to: "/favorite" },
    {
      id: "github",
      icon: <FiGithub size="24" />,
      to: "https://github.com/Tyn-Tian",
    },
  ];

  return (
    <nav
      className={cn(
        "w-screen sm:w-20",
        "h-20 sm:h-screen",
        "bg-gradient-to-l sm:bg-gradient-to-b from-slate-900 to-slate-950",
        "sm:py-5",
        "fixed",
        "bottom-0 sm:left-0",
        "rounded-t-xl  sm:rounded-r-xl",
        "z-50"
      )}
    >
      <ul
        className={cn(
          "w-full",
          "h-full sm:h-fit",
          "flex",
          "sm:flex-col",
          "items-center",
          "justify-center",
          "gap-10 sm:gap-6"
        )}
      >
        <li className="hidden sm:block p-4 rounded-lg bg-white">
          <Link to="/">
            <img
              className="w-6 aspect-auto"
              src="/Logo.svg"
              alt="Restaurant Logo"
            />
          </Link>
        </li>
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`p-4 rounded-lg transition duration-300 ${
              active === item.id
                ? "bg-red-400 shadow-lg text-white"
                : "bg-slate-900 text-gray-400 hover:bg-red-400 hover:text-white hover:shadow-lg"
            }`}
            onClick={() => setActive(item.id)}
          >
            {item.id === "github" ? (
              <a href={item.to} target="_blank">
                {item.icon}
              </a>
            ) : (
              <Link to={item.to}>{item.icon}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
