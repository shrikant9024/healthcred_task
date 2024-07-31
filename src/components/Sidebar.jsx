// components/Sidebar.tsx
import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-72 bg-gray-100 shadow-md flex-col font-inter hidden sm:flex">
      <div className="flex items-center justify-center overflow-hidden h-24 bg-slate-700 rounded-u-2xl text-slate-200 shadow flex-col">
        <span className="text-xl font-semibold ">Hello User!</span>
        <div className="flex flex-row justify-between items-center"></div>
      </div>
      <nav className="flex-grow p-2 justify-center flex bg-slate-100 rounded-2xl">
        <ul>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center px-14 p-2 text-slate-950 hover:bg-slate-800 rounded-xl hover:text-slate-100 transform transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <span>Home</span>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center px-14 p-2 text-slate-950 hover:bg-slate-800 rounded-xl hover:text-slate-100 transform transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <span>Boards</span>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center px-14 p-2 text-slate-950 hover:bg-slate-800 rounded-xl hover:text-slate-100 transform transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <span>Settings</span>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center px-14 p-2 text-slate-950 hover:bg-slate-800 rounded-xl hover:text-slate-100 transform transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <span>Teams</span>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center px-14 p-2 text-slate-950 hover:bg-slate-800 rounded-xl hover:text-slate-100 transform transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <span>Analytics</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-4"></div>
    </div>
  );
};

export default Sidebar;
